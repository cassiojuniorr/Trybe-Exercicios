//exercicio 1
console.log("--exercicio 1-");
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

//exercicio 2
console.log("--exercicio 2-");
let word = 'tryber';
let rever = '';

for (let index = 0; index < word.length; index += 1) {
  rever += word[word.length - 1 - index];
}
console.log(rever);

//exercicio 3
console.log("--exercicio 3-");
let array = ['java', 'javascript', 'python', 'html', 'css'];
let pala = '';
for (let cont = 0; cont < array.length; cont++) {
  pala = array[0].length;
  if (pala > array[cont].length) {
    pala = array[cont].length;
  }
}
for (let most = 0; most < array.length; most++) {
  if (pala == array[most].length) {
    console.log('A palavra',array[most],"tem", pala, "caracteres sendo a menor palavra.")
  }
}

//exercicio 4
console.log("--exercicio 4-");

let maior = 0;

for (let cont = 0; cont <= 50; cont += 1) {
  let isPrime = true;
  for (let limit = 2; limit < cont; limit += 1) {
    if (cont % limit === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    maior = cont;
  }
}

console.log('O maior número primo entre 0 e 50 é: ',maior);


