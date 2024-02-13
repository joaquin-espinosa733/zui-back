import { User } from "../interface/user.interface"
import UserModel from "../models/user"
import { encrypt } from "../utils/encriptado";


const registerUser = async ({ userName, password, email, birthdate }: User) => {

    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({
        userName,
        password: passHash,
        email,
        birthdate
    })
    return registerNewUser;
}


export { registerUser }