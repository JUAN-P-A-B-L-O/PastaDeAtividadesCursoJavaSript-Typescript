class DispositivoEletronico{
    constructor(nome){
        this.nome=nome;
        this.ligado=false;

    }


    ligar(){
        if(this.ligado === true) return;
        else this.ligado=true;
    }
    desligar(){
        if(this.ligado === false) return;
        else this.ligado=false;
    }
}


class Smarphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor=cor;
        this.modelo=modelo;
    }
}

const s1= new Smarphone(`ìphone`, `preto`, `S10`);
console.log(s1);

