//Exercício 1
document.getElementsByTagName("p")[0].innerText = "Me vejo formado na Trybe e trabalhando.";
document.getElementsByTagName("p")[1].innerText = "Talvez da qui uns anos falando iglês fluente.";

//Exercício 2
function changeYellow (){
    let trocaCor = document.getElementsByClassName("main-content");
    trocaCor[0].style.backgroundColor = 'rgb(76,164,109)';
}
changeYellow();

//Exercício 3
//forma 1
function changeColor (){
    let trocaCor2 = document.querySelectorAll("main.main-content section.center-content");
    trocaCor2[0].style.backgroundColor = 'white'; 
}
changeColor();
/* forma 2
let trocaCor2 = document.getElementsByClassName("center-content");
trocaCor2[0].style.backgroundColor = 'white';
forma 3
let trocaCor2 = document.getElementsByTagName("section");
trocaCor2[0].style.backgroundColor = 'white'; */

//Exercício 4
function ChangeH1(frase){
    document.querySelectorAll("header h1.title")[0].innerText = frase;
}
ChangeH1("Novo Titulo!");

//Exercício 5
function maiusc(){
    for (let index= 0; index <  p.length; index++){
        document.getElementsByTagName("p")[index].innerText = toLowerCase('p');
    }
}
maiusc();

function exibP(){
    for (let index= 0; index <  p.length; index++){
        //console.log(document.getElementsByTagName('p[index]');
    }
}
