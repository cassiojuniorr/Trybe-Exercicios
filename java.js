let buLimp = document.getElementById("bLimp");
buLimp.addEventListener("click",function(env){
    env.preventDefault();

    let nam = document.getElementById("nameC");
    nam.value = "";

    let ema = document.getElementById("emailU");
    ema.value = ""; 

    let texA = document.getElementById("textAr");
    texA.value = "";

    let daata = document.getElementById("inDate");
    daata.value = "";

    let check = document.querySelector('#boxLik')
    check.value = "";
});

let buEnv = document.querySelector("#bSend");
buEnv.addEventListener("click",function(env){
    env.preventDefault();
});