import { User } from "../interface/user.interface"
import { handleHttp } from "../utils/error"
import UserModel from "../models/user"


const registerUser = async ({ userName, password, email, birthdate }: User) => {
    const register = await UserModel.create({})
}