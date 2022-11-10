import { IEmployee } from "./interfaces";
import Person from "./Person";

export default class Teacher 
    extends Person implements IEmployee {
    private _subject = '';

    constructor(
        name: string,
        birthDate: Date,
        subject: string,
        public registration: number,
        public salary: number,
        public admissionDate: Date,
    ) {
        super(name, birthDate);

        this._subject = subject;
        this.validations();
        this.validationEmploye();
    }

    getName () {
        return this.name;
    }

    getbirthDate () {
        return this.getBirthDate();
    }

    getSubjec () {
        return this._subject;
    }

    setName(value: string) {
        this.name = value;
    }

    setBirthDate(value: Date) {
        this.setBirthDate(value);
    }

    setSubjact(value: string) {
        this._subject = value;
    }

    validationEmploye() {
        if (this.registration < 16) {
            throw new Error('INVALIDA_REGISTRATION')
        }

        if (this.salary < 0) {
            throw new Error('INVALIDA_NEGATIVE_SALARY')
        }

        if (this.admissionDate.getTime() > new Date().getTime()) {
            throw new Error('INVALIDA_ADMISSION_DATE')
        }
    }
}