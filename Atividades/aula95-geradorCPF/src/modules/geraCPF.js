import { Cpf } from "./Cpf";


export default class geraCPF{
    rand(min=10000000, max=99999999){
        return String(Math.floor(Math.random()* (max-min)+ max));
    }
    reduc(multiplicadorInicial){
        this.cpfArray.reduce((acumulador, valor, indice)=>{
            let valorPronto= valor* (multiplicadorInicial-indice);
            this.aux_total+=Number(valorPronto);
        },0)
    }

}

const g1= new geraCPF();
g1.geraNovoCpf();
