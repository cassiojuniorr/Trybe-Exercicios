import { IUser } from "../interfaces";
import UserModel from "../models/user.model";
import Validations from "./validations/validations";


export default class UserService {
    UserModel = new UserModel();
    validations = new Validations();

    getAll(): Promise<IUser[]> {
        return this.UserModel.getAll();
    }

    create(user: IUser): Promise<IUser> | object {
        const newUser = this.UserModel.create(user);

        return newUser;
    }
}