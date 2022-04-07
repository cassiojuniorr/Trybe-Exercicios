//adição
    let nun1 = 2;
    let nun2 = 4;
    console.log(nun1 + nun2);
//subtração
    let nun3 = 7;
    let nun4 = 10;
    console.log(nun3 - nun4);
//mutiplicação
    console.log(nun1 * nun2);
//divisão
    console.log(nun3/nun1);
//modulo
    console.log(nun4 % nun1);
//exercicio 2
    const nume = 5;
    const nume2 = 54;
    if (nume > nume2) {
        console.log("O primeiro numero é maior que o segundo.");   
    } else if (nume2 > nume) {
        console.log("O segundo numero é maior que o primeiro.");
    } else {
        console.log("Os números são iguais.");
    }
//exercicio 3
    const a = 2;
    const b = 4;
    const c = 3;
    if (a > b && b > c){
        console.log("A ordem do maior para o menor é:");
        console.log(a);
        console.log(b);
        console.log(c);
    } else if (a < b && b < c){
        console.log("A ordem do maior para o menor é:");
        console.log(c);
        console.log(b);
        console.log(a);
    } else if (b > a && b > c && a > c){
        console.log("A ordem do maior para o menor é:");
        console.log(b);
        console.log(a);
        console.log(c);
    } else if (b > c && c > a){
        console.log("A ordem do maior para o menor é:");
        console.log(b);
        console.log(c);
        console.log(a);
    } else {
        console.log("sintaxe incorreta!")
    }
//exercicio 4
    const exe4 = true;
    console.log(!exe4);
//exercicio 5
    const ang1 = 30;
    const ang2 = 60;
    const ang3 = 90;
    if (ang1 + ang2 + ang3 == 180){
        console.log("true,é um triangulo!");
    }else {
        console.log("false,não é um triangulo!");
    }
//exercicio 6
    let peça = "bispo";
    if (peça == "bispo"){
        console.log("bispo movimento:diagonais");
    } else if (peça == "peao"){
        console.log("peao movimento:reto");
    } else if (peça == "rainha"){
        console.log("rainha movimento:qualquer direção");
    } else if (peça == "rei"){
        console.log("rei movimento:qualquer direção,mas só uma casa");
    } else if (peça == "cavalo"){
        console.log("cavalo movimento: L");
    } else if (peça == "torre"){
        console.log("torre movimento: em cruz");
    } else {
        console.log("peça inexistente!")
    }
//segunda forma
    let peça2 = "peao";
    switch(peça2) {
        case "bispo":
            console.log("bispo movimento:diagonais");
            break;
        case "peao":
            console.log("peao movimento:reto");
            break;
        case "rainha":
            console.log("rainha movimento:qualquer direção");
            break;
        case "cavalo":
            console.log("cavalo movimento: L");
            break;
        case "torre":
            console.log("torre movimento: em cruz");
            break;
        default:
            console.log("peça inexistente!")
    }

//exercicio 7

    let por = 55;

    if(por >= 90 && por <=100) {
        console.log("Nota A");
    }else if(por >= 80 && por < 90) {
        console.log("Nota B");
    }else if(por >= 70 && por < 80) {
        console.log("Nota C");
    }else if(por >= 60 && por < 70) {
        console.log("Nota D");
    }else if(por >= 50 && por <60) {
        console.log("Nota D");
    }else if(por < 50 && por > 0) {
        console.log("Nota F");
    }else if(por > 100) {
        console.log("Erro:Valor muito ALTO");
    }else if(por <= 0) {
        console.log("Erro:Valor muito BAIXO");
    }
//exercicio 8

    const ex8 = 4;
    const ex81 = 3;
    const ex82 = 9;

    if(ex8 % 2 == 0 || ex81 % 2 == 0 || ex82 % 2 == 0 ){
        console.log("true")
    }else {
        console.log("false")
    }
//exercicio 9

    const ex9 = 4;
    const ex91 = 3;
    const ex92 = 8;

    if(ex9 % 2 == 1 || ex91 % 2 == 1 || ex92 % 2 == 1 ){
        console.log("true")
    }else {
        console.log("false")
    }
//exercicio 10
    const cust = 100;
    const vend = 130;

    let ven = vend * 1000;
    let cus = cust * 1000;
    let luc = ven - cus
    console.log("Lucro:"+luc);

