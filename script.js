//cor background
function corFundo(){
    let back = document.body;
    back.style.backgroundColor = backgr.value;
}

backgr.addEventListener("change", corFundo);
//cor parágrafo
function corText(en){
    let para = document.getElementById("tex");
    para.style.backgroundColor = inTex.value;
}

tex.addEventListener("change", corText);