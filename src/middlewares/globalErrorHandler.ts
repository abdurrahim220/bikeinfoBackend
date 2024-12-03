import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import httpStatus from 'http-status';

import { IGenericErrorMessage } from '../interface/error.interface';
import handleZodError from '../error/handleZodError';
import handleValidationError from '../error/handleValidationError';
import ApiError from '../error/ApiError';
import handleCastError from '../error/handleCastError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;
  let message = 'Internal server error';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: process.env.NODE_ENV !== 'production' ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
