import { NextFunction, Request, Response } from "express";

import { userService } from "../services";
import { IMessage, IResponse, IUser } from "../types";

class UserController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]>> {
    try {
      const users = await userService.getAll();

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const { userId } = req.params;
      const user = await userService.getById(userId);

      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IResponse<IUser>>> {
    try {
      const data = req.body;
      const user = await userService.create(data);

      return res.status(201).json({
        message: "User created!",
        data: user,
      });
    } catch (e) {
      next(e);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IResponse<IUser>>> {
    try {
      const { userId } = req.params;
      const user = req.body;

      const updatedUser = await userService.update(userId, { ...user });

      return res.status(200).json({
        message: "User updated",
        data: updatedUser,
      });
    } catch (e) {
      next(e);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IMessage>> {
    try {
      const { userId } = req.params;

      await userService.delete(userId);

      return res.status(200).json({
        message: "User deleted",
      });
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
