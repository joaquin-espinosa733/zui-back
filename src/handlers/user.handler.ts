import { Request, Response } from "express";
import { registerUser, userLogin } from "../controllers/user.controller";
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

const loginUserHandler = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const response = await userLogin({ email, password })
        res.status(200).json(response)
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ success: false, message: error.message });
        } else {
            res.status(500).json({ success: false, message: "Error desconocido" });
        }
    }
}

export { registerUserHandler, loginUserHandler }