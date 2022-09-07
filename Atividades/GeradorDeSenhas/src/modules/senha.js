import { GeraSenha } from "./GeraSenha";

const button = document.querySelector(`button`);
const resultado = document.querySelector(`.resultado`);

class MostraSenha {
    constructor(quantCaracter, inputNumeros, inputMaiusculos, inputMinusculos, inputSimbolos) {
        this.quantCaracter = quantCaracter;
        this.inputNumeros = inputNumeros;
        this.inputMaiusculos = inputMaiusculos;
        this.inputMinusculos = inputMinusculos;
        this.inputSimbolos = inputSimbolos;
        const mostraSenha1 = this.mostraSenha();
    }
    mostraSenha() {
        const innerSenha = (new GeraSenha(this.quantCaracter, this.inputNumeros, this.inputMaiusculos, this.inputMinusculos, this.inputSimbolos));
        console.log(innerSenha.senhaEntregue);
        const elemento = document.createElement(`p`);
        if (innerSenha.senhaEntregue === undefined) {
            resultado.innerText = `Configuracao indefinida, tente novamente`;


        } else {

            resultado.innerText = `Senha: ${(innerSenha.senhaEntregue).replace("/\D+/g"," ")}`;
            
        }
        // resultado.appendChild(elemento);
    }
}

button.addEventListener(`click`, e => {
    const quantCaracter = document.querySelector(`.quan-cara`);
    const intNu = document.querySelector(`.ad-nu`);
    const inputMaiusculos = document.querySelector(`.ad-ma`);
    const inputMinusculos = document.querySelector(`.ad-mi`);
    const inputSimbolos = document.querySelector(`.ad-sim`);
    const primeiro = intNu.checked;
    const dois = inputMaiusculos.checked;
    const tres = inputMinusculos.checked;
    const quatro = inputSimbolos.checked;
    const Mostrasenha1 = new MostraSenha(quantCaracter.value, primeiro, dois, tres, quatro);
})
