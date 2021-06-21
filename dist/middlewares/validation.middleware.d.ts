import { RequestHandler } from 'express';
declare const validationMiddleware: (type: any) => RequestHandler;
export default validationMiddleware;
