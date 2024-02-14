import { LoginUser, User } from "../interface/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/encriptado";


const registerUser = async ({ userName, password, email, birthdate }: User) => {

    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({
        userName,
        password: passHash,
        email,
        birthdate: new Date().toISOString()
    })
    return registerNewUser;
}


const userLogin = async ({ email, password }: LoginUser) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) {
        throw new Error("Correo electronico incorrecto")
    };
    const passworfHash = checkIs.password;
    const isCorrectPassword = await verified(password, passworfHash);
    if (!isCorrectPassword) {
        throw new Error("Contraseña incorrecta");
    }
    const { _id, userName } = checkIs;
    return { success: true, _id, userName, email };
}

export { registerUser, userLogin }