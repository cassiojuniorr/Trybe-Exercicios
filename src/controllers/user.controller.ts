import { Request, Response } from "express";
import UserService from "../services/user.service";
import Validations from "../services/validations/validations";

export default class UserController {
    userService = new UserService();
    validations = new Validations();

    async getAll(req: Request, res: Response) {
        
        const users = await this.userService.getAll();
        res.status(200).json(users);
    }

    async create(req: Request, res: Response) {
        const { type, message } = this.validations.valNewUser(req.body)
        if (type) {
            return res.status(404).json({ message })
        }
        
        const user = await this.userService.create(message);

        res.status(201).json(user);
    }
}