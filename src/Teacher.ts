import Emplyee from "./Employee";
import { Enrollable } from "./interfaces";

export default class Teacher 
    extends Emplyee implements Enrollable {
    private _subject = '';
    private _registration: number;
    private _salary: number;
    private _admissionDate: Date;
    private _enrollment: string;

    constructor(
        name: string,
        birthDate: Date,
        subject: string,
        registration: number,
        salary: number,
        admissionDate: Date,
        public enrollment: string,
    ) {
        super(name, birthDate, registration, salary, admissionDate);
        this.validations();
        this.validationEmploye();
        this._enrollment = this.generateRegistration();
        
        this._subject = subject;
        this._registration = registration;
        this._salary = salary;
        this._admissionDate = admissionDate;
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

    getEnrollment () {
        return this._enrollment;
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

    generateEnrollment () {
        return this._enrollment;
    }

    validationEmploye() {
        if (this._registration < 16) {
            throw new Error('INVALIDA_REGISTRATION')
        }

        if (this._salary < 0) {
            throw new Error('INVALIDA_NEGATIVE_SALARY')
        }

        if (this._admissionDate.getTime() > new Date().getTime()) {
            throw new Error('INVALIDA_ADMISSION_DATE')
        }
    }
}