import { ErrorRequestHandler, NextFunction } from 'express';

const globalErrorHandler : ErrorRequestHandler = (
    error, req, res, next: NextFunction
  ) => {
   /* console.log(error) */
     res.status(400).json({error: error})
     next()
  };
  
export default globalErrorHandler;