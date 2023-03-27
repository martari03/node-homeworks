import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { configs } from "./configs";
import { cronRunner } from "./crons";
import { AppError } from "./errors";
import { authRouter, carRouter, userRouter, welcomeRouter } from "./routers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/cars", carRouter);
app.use("/users", userRouter);
app.use("/welcome", welcomeRouter);

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status;

  return res.status(status).json({
    message: err.message,
    status,
  });
});

app.listen(configs.PORT, async () => {
  await mongoose.connect(configs.DB_URL);
  cronRunner();
  // eslint-disable-next-line no-console
  console.log(`Server has started on PORT ${configs.PORT}`);
});
