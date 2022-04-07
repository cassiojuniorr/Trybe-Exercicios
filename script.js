//exercicio 1
console.log("--exercicio 1-");
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length;index++){
    console.log(numbers[index]);
}
console.log("--for/of-");
for ( index of numbers){
    console.log(index);
}
//exercicio 2
console.log("--exercicio 2-");
let soma = 0;
for (index = 0;index , index < numbers.length;index++){
    soma += numbers[index];
}
console.log(soma);
//exercicio 3 
console.log("--exercicio 3-");
let media = 0;
media = soma/numbers.length
console.log(media);
//exercicio 4 
console.log("--exercicio 4-");
if(media > 20){
    console.log("valor maior que 20");
}else {
    console.log("valor menor ou igual a 20");
}
//exercicio 5
console.log("--exercicio 5-");
