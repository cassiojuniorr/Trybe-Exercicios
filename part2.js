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
primos= ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',
'21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41',
'42','43','44','45','46','47','48','49','50']
let mar = primos[0];
let pri = [];
for(let cont = 0;cont < primos.length; cont++){
  if (primos[cont] / primos[cont] && primos[cont] /  1){
    pri.push(primos[cont]);
    console.log(pri);
  }else if (pri > mar){
    mar = pri[cont]
  }
}
console.log('O maior número primo entre 0 e 50 é: ',mar);

