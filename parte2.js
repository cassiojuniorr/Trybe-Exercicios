console.log(`--Exercicio 1  `);
const fatorial = (n) => {
    let mult = 1;
    for (let i = 1; i <= n; i ++){
        mult *= i; 
    }
    return mult    
}

console.log(fatorial(8));

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(8));

console.log(`--Exercicio 2  `);
const longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const contPhase = (phase) => {
    let arrayPhase = [];
    let maiorPhase = arrayPhase[0];

    for (let index in longestWord) {
        arrayPhase.push(longestWord.split(' '));
        if (arrayPhase[index].length > maiorPhase) {
            let maiorPhase = arrayPhase[index];
            return maiorPhase;
        }
        
    }
}

contPhase(longestWord);
