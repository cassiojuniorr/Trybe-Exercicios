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