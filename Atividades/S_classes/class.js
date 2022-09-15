class Pessoa{
    constructor(nome, sobrenome){
        this.nome=nome;
        this.sobrenome=sobrenome;

    }


    falar(){
        console.lg(`${this.nome} está falando.`);
    }
    
}


const p1= new Pessoa(`Luiz`, `Miranda`);
p1.falar();
console.log(p1);

function Pessoa2(nome, sobrenome){
    this.nome=nome;
    this.sobrenome=sobrenome;
}

Pessoa2.prototype.falar= function(){
    console.log(`${this.nome} está falando!`);
}
const pp1= new Pessoa2(`Juan`, `Pablo`);
pp1.falar();