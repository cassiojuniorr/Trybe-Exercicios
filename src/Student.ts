import { resourceLimits } from "worker_threads";
import { IStudent } from "./interfaces";
import Person from "./Person";

export default class Student extends Person {
    private _enrollment: string;
    private _examsGrades: number[];
    private _worksGrades: number[];       

    constructor(value: IStudent) {
        const { name, birthDate, enrollment, examsGrades, worksGrades } = value;
        super(name, birthDate);

        if (enrollment.length < 16) {
            throw new Error('INVALID_ENROLLMENT');
        }

        this._enrollment = enrollment;
        this._examsGrades = examsGrades;
        this._worksGrades = worksGrades;
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

    set enrollment(value: string) {
        this._enrollment = value;
    }

    set examsGrades(value: number[]) {
        this._examsGrades = value;
    }

    set worksGrades(value: number[]) {
        this._worksGrades = value;
    }

    sumGrades() {
        const exams = this._examsGrades.forEach((exam: number): number => {
            let result = exam += exam;
            return result;
        }) as unknown as number;

        const works = this._worksGrades.forEach((work: number): number => {
            let result = work += work;
            return result;
        }) as unknown as number;

        const result = exams + works;
        return result;
    }
}