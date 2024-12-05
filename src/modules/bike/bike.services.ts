import mongoose, { SortOrder } from 'mongoose';

import { bikeSearchableFields } from './bike.constant';
import { IBike, IBikeFilters } from './bike.interface';
import { Bike } from './bike.model';
import ApiError from '../../error/ApiError';
import httpStatus from 'http-status';

import { IGenericResponse } from '../../interface/common';
import { IPaginationOptions } from '../../interface/pagination';
import { paginationHelpers } from '../../shared/paginationHelper';

// Create bike
const createBike = async (payload: IBike): Promise<IBike> => {
  const result = await Bike.create(payload);
  return result;
};

// Get all bikes
const getAllBikes = async (
  filters: IBikeFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IBike[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: bikeSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder as SortOrder;
  }

  andConditions.push({
    isDeleted: { $ne: true },
  });

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Bike.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Bike.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get single bike
const getSingleBike = async (id: string): Promise<IBike | null> => {
  const result = await Bike.findById(id);
  return result;
};

// Update bike
const updateBike = async (
  id: string,
  payload: Partial<IBike>,
): Promise<IBike | null> => {
  const result = await Bike.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// Delete bike
const deleteBike = async (id: string): Promise<IBike | null> => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const bike = await Bike.findById(id).session(session);
    if (!bike) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Bike not found!');
    }
    if (bike.isDeleted) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        'This bike has already been deleted.',
      );
    }

    const result = await Bike.findByIdAndUpdate(
      id,
      { isDeleted: true },
      {
        new: true,
        session,
      },
    );

    await session.commitTransaction();
    return result;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};
export const BikeService = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
