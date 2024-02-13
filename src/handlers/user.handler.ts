import { Request, Response } from "express";
import { registerUser } from "../controllers/user.controller";
import { handleHttp } from "../utils/error";


const registerUserHandler = async (req: Request, res: Response) => {
    try {
        const { birthdate, userName, email, password } = req.body;
        const response = await registerUser({ birthdate, userName, email, password });
        res.status(200).json(response)
    } catch (error) {
        handleHttp(res, "ERROR_POST_USER")
    }
}

export { registerUserHandler }