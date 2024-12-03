import { Response } from 'express';

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  token?: string;
  data?: T | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const response: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta,
    token: data.token,
    data: data.data || null,
  };

  //   if (data.token) {
  //     res.cookie('token', data.token, {
  //       maxAge: 1000 * 60 * 60 * 24,
  //       httpOnly: true,
  //     });
  //   }
  if (data.token) {
    response.token = data.token;
  }

  res.status(data.statusCode).json(response);
};

export default sendResponse;
