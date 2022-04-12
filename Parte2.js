//exercicio 1
/* console.log('--exercicio 1-')

let rever = '';
function exercicio1(numb){
    for (let index = 0; index <= numb.length; index++){
        rever += numb[numb.length-1-index];
    }
    for (let cont = 0; cont < numb.length; cont++){
        if (rever[cont]== numb[numb.length - cont]){
            console.log('O ',numb,' é um palíndromo!');
        } else {
            console.log('O ',numb," não é um palíndromo!");
        }
    }
}
console.log(exercicio1('arara'));  */

//exercicio 2
console.log('--exercicio 2-')
let resp = '';
let maior = '';
let arteste = [2,3,6,7,10,1];
let ma = '';
function exer2(numb){
    for (ma in arteste){
        if(maior < arteste[ma]){
            maior = arteste[ma];
        }
    }
    for (let cont = 0; cont < arteste.length; cont++){
        if (arteste[cont] == maior){
            resp = cont
        }
    }
    console.log('O maior número é:',maior + '.');
    console.log('Na posição:',resp + '.')
}
console.log(exer2(arteste));

//exercicio 3
console.log('--exercicio 3-')

let i = null;
let min = [0];
let arr2 = [2, 4, 6, 7, 10, 0, -3];
function exer3(numb){
    for (let cont = 0; cont < arr2.length; cont++){
        if (min > arr2[cont]){
            min = arr2[cont]
        }
    }
    for (let index = 0; index < arr2.length; index++){
        if(arr2[index] == min){
            i = index;
        }
    }
    console.log('O menor número é:',min + '.');
    console.log('Na posição:',i + '.')
}
console.log(exer3(arr2));

//exercicio 4
console.log('--exercicio 4-')

let carac = null;
let max = null;
let posi = '';
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function nameMax (numbers){
    for (let index = 0; index < names.length; index++){
        for (let i = 0; i < names.length; i++){
            if(carac < names[index].length){
            carac = names[index].length;
            posi = index
            }
        }
    }

console.log("O nome",names[posi],"é o maior.");
console.log("Tendo",carac,"caracteres.");
}
console.log(nameMax(names));

//exercicio 5
console.log('--exercicio 5-')

let arr3 = [2, 3, 2, 5, 8, 2, 3];
let repentindo = null;
function repet(array){
    for (let index = 0; index < arr3.length; index++){
        for (let i = 0; i < arr3.length; i ++){
            if(arr3[index] == arr3[i]){
                repentindo = arr3[i];
                console.log(repentindo);
            }
        }
    }
console.log(repentindo);
}
console.log(repet(arr3));
