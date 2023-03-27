import { NextFunction, Request, Response } from "express";

class WelcomeController {
  public async getWelcome(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.send("WELCOME");
  }
}

export const welcomeController = new WelcomeController();
