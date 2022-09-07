class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume(){
        this.volume+=2;
    }
    diminuirVolume(){
        this.volume-=2;
    }

    // metodo geral para todos os objetos dessa classe(metodo estatico)
    static zeraVolumeGeral(){
        console.log(`Doidera, faz nada muito util isso nao`);
    }
}

const controle1= new ControleRemoto(`LG`);
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
const controle2 = new ControleRemoto(`San`);
controle2.aumentarVolume();
controle2.aumentarVolume();
console.log(controle2);
ControleRemoto.zeraVolumeGeral();

