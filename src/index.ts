import Person from "./Person";
import Student from "./Student";
import { IStudent } from "./interfaces";

const person1 = new Person('Carlos', new Date());

console.log(person1);
// person1.name = 'Joao'
// console.log(person1.name);
// person1.setBirthDate(new Date())
// console.log(person1.getBirthDate());

const value: IStudent = {
    name: 'adadaad',
    birthDate: new Date(),
    enrollment: 'dadadadadadadadadadadadadadadadadaddad',
    examsGrades: [1, 3, 5, 6],
    worksGrades: [23, 56, 1, 5],
};
const student1 = new Student(value);
console.log(student1);

console.log(student1.sumGrades());
