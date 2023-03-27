import { Router } from "express";

import { userController } from "../controllers";
import { userMiddleware } from "../middlewares";

const router = Router();

router.get("/", userController.getAll);
router.post("/", userController.create);

router.get("/:userId", userMiddleware.getByIdAndThrow, userController.getById);
router.put("/:userId", userMiddleware.getByIdAndThrow, userController.update);
router.patch("/:userId", userMiddleware.getByIdAndThrow, userController.update);
router.delete(
  "/:userId",
  userMiddleware.getByIdAndThrow,
  userController.delete
);

export const userRouter = router;
