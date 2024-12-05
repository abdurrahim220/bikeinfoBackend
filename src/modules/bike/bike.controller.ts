import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { BikeService } from './bike.services';

import pick from '../../shared/pick';
import { bikeFilterableFields } from './bike.constant';
import { IBike } from './bike.interface';
import { paginationFields } from '../../constants/pagination';

// Create bike
const createBike = catchAsync(async (req: Request, res: Response) => {
  const { ...bikeData } = req.body;
  const result = await BikeService.createBike(bikeData);

  sendResponse<IBike>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike created successfully',
    data: result,
  });
});

// Get all bikes
const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bikeFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BikeService.getAllBikes(filters, paginationOptions);

  sendResponse<IBike[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

// Get single bike
const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BikeService.getSingleBike(id);

  sendResponse<IBike>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike retrieved successfully',
    data: result,
  });
});

// Update bike
const updateBike = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await BikeService.updateBike(id, updatedData);

  sendResponse<IBike>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike updated successfully',
    data: result,
  });
});

// Delete bike
const deleteBike = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BikeService.deleteBike(id);

  sendResponse<IBike>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike deleted successfully',
    data: result,
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
