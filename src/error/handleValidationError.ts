import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interface/error.interface';
import httpStatus from 'http-status';

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    },
  );

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
