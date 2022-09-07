const butao= document.querySelector(`.butao`);
function DeixaAzul(){
    butao.style.backgroundColor= `blue`;
}
function DeixaVerde(){
    butao.style.backgroundColor= `green`;

}



function DeixaVermelho(){
    butao.style.backgroundColor= `red`;
}



function*geradora(){
    yield DeixaAzul();
    yield*DeixaVerde();
    yield*DeixaVermelho();

}


butao.addEventListener(`click`, geradora);
// isso deu totalmente errado, vejo que nao manjo de nada sobre isso daqui. DEU RUIM