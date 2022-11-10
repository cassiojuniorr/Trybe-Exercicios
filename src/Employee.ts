import { IEmployee } from "./interfaces";

export default class Emplyee implements IEmployee {

    constructor(
        public registration: number,
        public salary: number,
        public admissionDate: Date,
    ) {}

    generateRegistration() {
        const uuid = crypto.randomUUID();
        return `${this.registration}-${uuid}-${this.admissionDate}`
    }

}
