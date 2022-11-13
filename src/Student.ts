import { Enrollable } from "./interfaces";
import Person from "./Person";

export default class Student 
extends Person implements Enrollable {
    private _enrollment: string;    
    private _examsGrades: number[] = [];
    private _worksGrades: number[] = [];   

    constructor(
        name: string,
        birthDate: Date,
    ) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
    }

    get enrollment(): string {
        return this._enrollment;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
    }

    set examsGrades(value: number[]) {
        this._examsGrades = value;
    }

    set worksGrades(value: number[]) {
        this._worksGrades = value;
    }

    generateEnrollment () {
        const uuid = crypto.randomUUID();
        return `${this._examsGrades}-${uuid}-${this._worksGrades}`
    }

    sumGrades() {
        const result = [...this._examsGrades, ...this._worksGrades].reduce(
            (prevNote, note) => prevNote + note 
        );
        
        return result;
    }
}