const nome = document.querySelector(`.nome`);
const sobrenome = document.querySelector(`.sobrenome`);
const cpf = document.querySelector(`.cpf`);
const usuario = document.querySelector(`.usuario`);
const senha= document.querySelector(`.senha`);
const senhaRepetida=document.querySelector(`.senhaR`);
const botao = document.querySelector(`.botao`);
const resultado= document.querySelector(`.resultado`);
const input= document.querySelector(`input`);
class Usuario {
    constructor(nome, sobrenome, cpf, usuario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.usuario = usuario;
        this.senha=senha;
        this.cpfBackup=Array.from(cpf.replace(/\D+/g, ``));
        this.cpfAveriguar=Array.from(cpf.replace(/\D+/g, ``));
        // Object.defineProperty(this, `cpfLimpo`,{
        //     value: Array.from(cpf.replace(/\D+/g, ``)),
            
        // })
    }
    verificaCpf() {
        this.cpfAveriguar.pop();
        this.cpfAveriguar.pop();
        this.cpfAveriguar.push(this.criaDigito(this.cpfAveriguar,10));
        this.cpfAveriguar.push(this.criaDigito(this.cpfAveriguar,11));
        const valor =this.compara(this.cpfAveriguar,this.cpfBackup);
        return valor;

    }
    criaDigito(array,multiplicadorInicial){
        let digito;
        let aux_total=0;
        array.reduce((acumulador, valor, indice)=>{
            const valorTratado= Number(valor)*(multiplicadorInicial-indice);
            aux_total+=valorTratado;
            digito= 11-(aux_total%11);
        },0)
        return digito>9? `0`:String(digito);
    }
    compara(string1,string2){
        return (String(string1)===String(string2));
    }
}

botao.addEventListener(`click`, () => {
    if(nome.value===``||sobrenome.value===``|| cpf.value===``|| usuario.value===``|| senha.value===``){
        input.style.border=`2px solid red`;
        return;
    }
    else{
        input.style.border=`1px solid black`;
    }
    if(senha.value.length<6|| senha.value.length>12){
        senha.style.border=`2px solid red`;
        return;
    }
    else{
        senha.style.border=`1px solid black`;
    }
    
    if(usuario.value.length<3|| usuario.value.length>12){
        usuario.style.border=`2px solid red`;
        return;
    }
    else {
        usuario.style.border=`1px solid black`;
    }
    if(senha.value!==senhaRepetida.value){
        senha.style.border=`2px solid red`;
        return;
    }
    else{
        senha.style.border=`1px solid black`;

    }
    const usuario1 = new Usuario(nome.value, sobrenome.value, cpf.value, usuario.value, senha.value);
    if(usuario1.verificaCpf()===false){
        resultado.innerHTML=`<h1>cpf inválido<h1>`;
        cpf.style.border=`2px solid red`;
        return;
    }
    else{
        cpf.style.border=`1px solid black`;
    }
    resultado.innerHTML=`<h1>TUDO CERTO<h1>`;

})
