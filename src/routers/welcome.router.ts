import { Router } from "express";

import { welcomeController } from "../controllers";

const router = Router();

router.get("/", welcomeController.getWelcome);

export const welcomeRouter = router;
