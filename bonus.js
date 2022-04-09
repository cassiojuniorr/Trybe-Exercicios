//exercicio 1
console.log('--exercicio 1-');
let n = 5;
let ast = '*****';
for (let cont = 0;cont <= n-1; cont++){
    console.log(ast);
}

//exercicio 2
console.log('--exercicio 2-');
let teris = '*';
let lin= '';
let size = 5;
for(let cont = 0; cont <= size; cont++){
    console.log(lin);
    lin = lin + teris;
}

//exercicio 3
console.log('--exercicio 3-');
let n2 = 5;
let aste = '*';
let line = '';
let posi = n;

for (let cont = 0; cont < n; cont += 1) {
  for (let index = 0; index <= n; index += 1) {
    if (index < posi) {
      line = line + ' ';
    } else {
      line = line + aste;
    }
  }
  console.log(line);
  line = '';
  posi -= 1;
};