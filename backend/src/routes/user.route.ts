import { Router } from "express";
import { getCurrentUserController, updateUserController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/current-user", getCurrentUserController);
userRoutes.post("/update-user", updateUserController);

export default userRoutes