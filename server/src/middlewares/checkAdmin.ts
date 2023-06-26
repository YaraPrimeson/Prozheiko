import { NextFunction, Response, Request } from "express";
import config from "../config";

const checkAccess = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;
    if (token === config.secretKey) {
      try {
        return next();
      } catch (e) {
        return res.status(403).json({
          message: "No access",
        });
      }
    } else {
      return res.status(403).json({
        message: "No access",
      });
    }
  };
};

export default checkAccess;
