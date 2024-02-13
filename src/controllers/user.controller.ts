import { User } from "../interface/user.interface"
import UserModel from "../models/user"
import { encrypt } from "../utils/encriptado";


const registerUser = async ({ userName, password, email, birthdate }: User) => {

    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password);
    const today = new Date();
    const year = today.getFullYear(); // Año actual
    const month = today.getMonth(); // Mes actual (los meses en JavaScript son indexados a partir de 0)
    const fullBirthdate = new Date(year, month, birthdate);
    const registerNewUser = await UserModel.create({
        userName,
        password: passHash,
        email,
        birthdate: fullBirthdate
    })
    return registerNewUser;
}


export { registerUser }