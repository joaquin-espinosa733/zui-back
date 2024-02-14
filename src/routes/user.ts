import { Router } from "express";
import { loginUserHandler, registerUserHandler } from "../handlers/user.handler";
const router = Router();


router.post("/register", registerUserHandler)
router.post("/login", loginUserHandler)


export { router }