//Exercicio 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

/* rectangles.forEach((rectangle) => {
  rectangleArea(...rectangles); 
  console.log(rectangle[0] * rectangle[1]);
}); */

//Exercicio 2
const sum = (...numbers) => numbers.reduce((arr, val) => arr += val);
/* console.log(sum(2,4,6,7,8,1,5,6,7,9)); */

//Exercicio 3
const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};
  
const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};

const personLikes = (objeto) => {
    const {name , age, likes} = objeto;
    return `${name} is ${age} years old and likes ${likes.join(', ')}.`
};
/* console.log(personLikes(alex));
console.log(personLikes(gunnar)); */

//Exercicio 4
const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
];

const filterPeople = (obj) => {
    return obj.filter((elm) => {
        if(elm.bornIn >= 2000) {
            return elm;
        };
    });
};
/* console.log(filterPeople(people)); */

//Exercicio 5
const myList = [1, 2, 3];

const swap = (list) => {
    const [a, b, c] = list;
    return [c, b, a];
};
/* console.log(swap(myList)); */

//Exercicio 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

