import { Enrollable } from "./interfaces";
import Person from "./Person";

export default class Emplyee 
    extends Person implements Enrollable {

    private _salary: number
    private _admissionDate: Date;
    private _enrollment: string;

    constructor(
        name: string,
        birthDate: Date,
        salary: number,
    ) {
        super(name, birthDate);

        this._salary = salary;
        this._admissionDate = new Date();
        this._enrollment = this.generateEnrollment();
    }

    get enrollment() {
        return this._enrollment;
    }

    generateEnrollment() {
        const uuid = crypto.randomUUID();
        return `${this._salary}-${uuid}-${this._admissionDate}`
    }

}
