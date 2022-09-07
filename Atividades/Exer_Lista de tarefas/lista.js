// inacabado tá dificil mermao
const corpo = document.querySelector(".corpo");
const input = document.querySelector(".input");
const butao = document.querySelector(".butao");
const tarefas = document.querySelector(".tarefas");
let new_button;
let new_button2;

input.addEventListener('keypress', function(e){
    console.log(e);
    if(e.keyCode===13){
        criaELemento();
    }
});

butao.addEventListener('click', function(){
    criaELemento();
})

function limpaInput(){
    input.value="";
    input.focus();
}

function criaButaoApagar(h1){
    const botaoApagar= document.createElement('button');
    botaoApagar.textContent+='apagar';
    h1.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar');
}

function criaELemento(){
    if(!input.value) return;
    let fala= input.value;
    let new_elements= document.createElement('h1');
    new_elements.innerHTML= fala;
    criaButaoApagar(new_elements);   
    tarefas.appendChild(new_elements);
    limpaInput();
}



document.addEventListener('click', function(e){ 
    const el= e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
})