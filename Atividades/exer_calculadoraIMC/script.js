let button= document.querySelector(".calcular");
function fala(){   
    let resultado= document.querySelector(".resultado");
    let peso = document.querySelector(".peso");
    let altura = document.querySelector(".altura");
    peso=Number(peso.value);
    altura=Number(altura.value);
    let imc= peso/(altura*altura);
    console.log(typeof(imc));
    if(peso<=0 | altura<= 0 ){    
        resultado.innerHTML="<h1>Dados conflitantes! Refaça por favor.<h1>";
        return;
    }
    //isso abaixo tá errado, alguma bagunça aqui
    if(typeof imc==='nan'){
        resultado.innerHTML="<h1>Dados conflitantes! Refaça por favor.<h1>";
        return;
    }  
    resultado.innerHTML="<h1>IMC resultante: <h1>"+ imc;
}
button.addEventListener("click", fala);







// IMC= peso/(altura*altura)