import { IUser } from "../../interfaces";
import Joi from "joi";

export default class Validations {

    valNewUser(user: IUser) {
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });

        const { error, value } = schema.validate(user);

        if (error) {
            return { type: 'INVALID_VALUE', message: error.message };
        }

        return { type: null, message: value };
    }

}