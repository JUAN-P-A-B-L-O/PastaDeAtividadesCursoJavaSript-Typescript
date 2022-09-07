let timer = document.querySelector(".relogio");
let butao_iniciar = document.querySelector(".iniciar");
let timer_true=document.querySelector(".timer");
let butaoPausar = document.querySelector(".pausar");
let butaoZerar = document.querySelector(".zerar");
let butaoNormal=document.querySelector(".normal");
let butaoMin=document.querySelector(".minuto");
let meu_inter;
let cronometro_real = 10800000;// started for 00:00:00 o'clock
let magia;
let cronometro_pronto;
let tempo=1000;
let bool= false;

function iniciar_contagem() {

    cronometro = setInterval(function mili() {
        cronometro_real += 1000;
        magia = new Date(cronometro_real);
        let horas = magia.getHours();
        if (horas < 10) {
            horas = `0${horas}`;
        }

        let minutos = magia.getMinutes();
        if (minutos < 10) {
            minutos = `0${minutos}`;
        }

        let segundos = magia.getSeconds();
        if (segundos < 10) {
            segundos = `0${segundos}`;
        }
        if(segundos%10==0){
            timer_true.style.backgroundColor="pink";
        }
        else{
            timer_true.style.backgroundColor="white";
        }
        cronometro_pronto = `${horas}:${minutos}:${segundos}`;
    }, 1000);
    bool=true;
}

function aux_iniciar(){
    if(bool===true) 
        ClearInterval(cronometro);
    iniciar();
    
}

function iniciar() {
    timer.style.color = 'black';
    iniciar_contagem();
    meu_inter = setInterval(function iniciar() {
        timer.innerHTML = "<h1><h1>" + (cronometro_pronto);
    }, 1000);
}

function pausar() {
    clearInterval(meu_inter);
    clearInterval(cronometro);
    timer.style.color = 'red';
    bool=false;
}
function zerar() {
    clearInterval(cronometro);
    clearInterval(meu_inter);
    cronometro_real = 10800000;
    timer.innerHTML = "<h1>00:00:00<h1>";
    timer.style.color = "black";
    tempo=1000;
    bool=false;
}

function t_minuto(){
    tempo=1000*60;
}

document.addEventListener('click', function(e){
    const elemento=e.target;
    if(elemento.classList.contains('iniciar')){
        aux_iniciar();
    }
    else if(elemento.classList.contains('pausar')){
        pausar();
    }
    else if(elemento.classList.contains('zerar')){
        zerar();
    }
})


// tudo abaixo foi resumido na chamada acima ^
// butao_iniciar.addEventListener("click", aux_iniciar);
// butaoPausar.addEventListener("click", pausar);
// butaoZerar.addEventListener("click", zerar);
// butaoNormal.addEventListener("click", t_normal);
// butaoMin.addEventListener("click", t_minuto);
