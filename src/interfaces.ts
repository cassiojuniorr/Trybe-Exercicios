export interface IStudent {
    name: string,
    birthDate: Date,
    enrollment: string,
    examsGrades: number[],
    worksGrades: number[],
}

export interface IEmployee {
    registration: number;
    salary: number;
    admissionDate: Date;
}

export interface Enrollable {
    enrollment: string;
    generateEnrollment(): string;
}