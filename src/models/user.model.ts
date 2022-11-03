import { ResultSetHeader, RowDataPacket } from "mysql2";
import { IUser } from "../interfaces";
import connection from "./connection";

export default class UserModel {
    connection = connection;

    async getAll(): Promise<IUser[]> {
        const [rows] = await connection.execute<IUser[] & RowDataPacket[]>('SELECT * FORM Users');

        return rows;
    }

    async create(user: IUser): Promise<IUser> {

        const [{ insertId }] = await connection.execute<ResultSetHeader>('INSERT INTO Users (name, email, password) VALUES (?,?,?)',
        [user.name, user.email, user.password]);

        const newUser = {
            id: insertId,
            ...user
        }

        return newUser;
    }
}