import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interface/error.interface';
import httpStatus from 'http-status';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: error.message,
    },
  ];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Cast Error',
    errorMessages: errors,
  };
};

export default handleCastError;
