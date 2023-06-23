import { ErrorRequestHandler, NextFunction } from 'express';
import { IGenericErrorMessage } from '../interfaces/error';
import config from '../config';
import handleValidationError from '../errors/validationError';

const globalErrorHandler : ErrorRequestHandler = (
    error, req, res, next: NextFunction
  ) => {
     
     let statusCode = 500;
     let message = 'Internal Server Error!';
     let errorMessages : IGenericErrorMessage[] = [];

     if (error?.name === 'ValidationError') {
        const simplifiedError = handleValidationError(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
      } else if (error instanceof Error) {
        message = error?.message;
        errorMessages = error.message
          ? [
              {
                path: '',
                message: error.message,
              },
            ]
          : [];
      }

     res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config.env !== 'production' ? error?.stack : undefined,
      });

      next()
  };
  
export default globalErrorHandler;