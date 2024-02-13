import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interface/user.interface";

const userSchema = new Schema<User>({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("user", userSchema);

export default UserModel;