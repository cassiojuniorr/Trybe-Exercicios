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
    const numer = 5;
    const numer2 = 54;
    if (numer > numer2) {
        console.log("O primeiro numero é maior que o segundo.");   
    } else if (numer2 > numer) {
        console.log("O segundo numero é maior que o primeiro.");
    } else {
        console.log("Os números são iguais.");
    }
//exercicio 3
    const numer3 = 10;
    if (numer > numer2) && (numer2 > numer3) && (numer > numer3){
        console.log("A ordem do maior para o menor é:");
        console.log(numer);
        console.log(numer2);
        console.log(numer3);
    } else if (numer < numer2) && (numer2 < numer3) && (numer3 > numer){
        console.log("A ordem do maior para o menor é:");
        console.log(numer3);
        console.log(numer2);
        console.log(numer);
    } else if (numer2 > numer) && (numer2 > numer3) && (numer > numer3){
        console.log("A ordem do maior para o menor é:");
        console.log(numer2);
        console.log(numer);
        console.log(numer3);
    } else if (numer2 > numer3) && (numer3 > numer){
        console.log("A ordem do maior para o menor é:");
        console.log(numer2);
        console.log(numer3);
        console.log(numer);
    }