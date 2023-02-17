import { Response, Request, NextFunction } from 'express'

// ? request, response, next type
export type ReqRes = (req: Request, res: Response) => Promise<any>
export type ReqResNext = (req: Request, res: Response, next: NextFunction) => Promise<any>
