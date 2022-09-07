class Cpf{
    constructor(cpfAverificar){
        this.cpfAverificar=cpfAverificar;
        this.cpfLimpo= this.cpfAverificar.replace(/\D+/g, ``);
        this.cpfArray=Array.from(this.cpfLimpo);
        this.cpfArrayBackup=String(this.cpfArray);
        this.aux_total=0;
        this.cpfArray.pop();
        this.cpfArray.pop();
        
        console.log(this.cpfArray);
    }
    set CpfAverificar(valor){
        // if(valor.length!==11) return;
        this.cpfAverificar=valor;
    }
    verificar(){
        this.reduc(10);
        this.criaDigito();
        this.reduc(11);
        this.criaDigito();
        console.log(this.cpfArray);
        this.comparador();

    }
    reduc(multiplicadorInicial){
        this.cpfArray.reduce((acumulador, valor, indice)=>{
            let valorPronto= valor* (multiplicadorInicial-indice);
            this.aux_total+=Number(valorPronto);
        },0)
    }
    
    criaDigito(){
        let digito=(11-(this.aux_total%11));
        if(digito>9){digito=0};
        this.cpfArray.push(String(digito));
        this.aux_total=0;
        return;
    }
    comparador(){
        console.log((String(this.cpfArrayBackup)===String(this.cpfArray)));
        console.log(String(this.cpfArray))
    }
}

const cpf1= new Cpf(`705.484.450-52`);
cpf1.CpfAverificar=`133.795.176-58`;
cpf1.verificar();