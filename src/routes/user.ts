import { Router } from "express";
import { registerUserHandler } from "../handlers/user.handler";
const router = Router();


router.post("/register", registerUserHandler)

export { router }