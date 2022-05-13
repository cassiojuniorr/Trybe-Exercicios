console.log(`--Exercício 1--`);
const makeEmail = (nome) => {
    return `${nome.replace(' ', '-').toLowerCase()}@trybe.com`;
};

lista= ["Cassio Junior", "Daniela Santos", "Pedro Henrique"]

const newEmployees = (listaNomes, makeEmail) => {
    const result = [];
    for (let index = 0; index < listaNomes.length; index += 1){
        result.push(`nome:${listaNomes[index]} email:${makeEmail(listaNomes[index])}`);
    };
    return result;
};

console.log(newEmployees(lista, makeEmail));

console.log(`--Exercício 2--`);
let myNumber = [1,5,8,3,9];
/* let myNumber = [6,3,8,9,10]; */
let megaVirada = [6,3,8,9,10];

const checkNumbers = (listNumbers) => {

    if(megaVirada === listNumbers){
        return true;
    };

    if(megaVirada !== listNumbers){
        return false;
    }
    
};

console.log(checkNumbers(myNumber));

const resultadoApost = (listNumeros, callbeck) => {

    if(callbeck(listNumeros) === true){
        return "Parabéns você ganhou";
    };

    if(callbeck(listNumeros) === false) {
        return "Tente novamente";
    };
    
};

console.log(resultadoApost(myNumber, checkNumbers));


