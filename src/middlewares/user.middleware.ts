import { NextFunction, Request, Response } from "express";
import { isObjectIdOrHexString } from "mongoose";

import { AppError } from "../errors";
import { User } from "../models";
import { UserValidator } from "../validators";

class UserMiddleware {
  public async getByIdOrThrow(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { userId } = req.params;

      const user = await User.findById(userId);

      if (!user) {
        throw new AppError("User not found", 422);
      }

      res.locals.user = user;
      next();
    } catch (e) {
      next(e);
    }
  }

  public async isIdValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      if (!isObjectIdOrHexString(req.params.userId)) {
        throw new AppError("ID not valid", 400);
      }
      next();
    } catch (e) {
      next(e);
    }
  }

  public async isValidCreate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { error, value } = UserValidator.validUser.validate(req.body);

      if (error) {
        throw new AppError(error.message, 400);
      }

      req.body = value;
      next();
    } catch (e) {
      next(e);
    }
  }

  public async isValidUpdate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { error, value } = UserValidator.updateUser.validate(req.body);

      if (error) {
        throw new AppError(error.message, 400);
      }

      req.body = value;
      next();
    } catch (e) {
      next(e);
    }
  }

  public async isValidPartialUpdate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { error, value } = UserValidator.updateUser.validate(req.body);

      if (error) {
        throw new AppError(error.message, 400);
      }

      req.body = value;
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const userMiddleware = new UserMiddleware();
