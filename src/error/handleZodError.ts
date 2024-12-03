import { ZodError } from 'zod';
import { IGenericErrorMessage } from '../interface/error.interface';
import httpStatus from 'http-status';

const handleZodError = (error: ZodError) => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue) => {
    return {
      path: issue?.path[issue.path.length - 1]?.toString() || '',
      message: issue?.message,
    };
  });

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleZodError;
