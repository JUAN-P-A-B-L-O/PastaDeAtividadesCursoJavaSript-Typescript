export class GeraSenha {
    constructor(quantidadeCara, numeros, LMaiusculas, LMinusculas, LSimbolos) {
        this.quantidadeCara = quantidadeCara;
        if(this.quantidadeCara===`` || (numeros===false && LMaiusculas===false && LMinusculas===false && LSimbolos===false)){
            return;
        }
        this.numeros = numeros;
        this.LMaiusculas = LMaiusculas;
        this.LMinusculas = LMinusculas;
        this.LSimbolos = LSimbolos;
        this.senhaEntregue= this.geradorSenha(this.quantidadeCara, this.numeros, this.LMaiusculas, this.LMinusculas, this.LSimbolos);
        return this.senhaEntregue;
    }

    // iniciar() {
    //     const senhaRertonada = this.geradorSenha(this.quantidadeCara, this.numeros, this.LMaiusculas, this.LMinusculas, this.LSimbolos);
    //     return senhaRertonada;
    // }
    geradorSenha(quan_caracter, number, LMaiusculass, LMinusculass, LSimboloss) {
        let senha = [];

        for (let i = 0; i < quan_caracter; i++) {
            if (number === true) {
                senha.push(this.rand());
                i++;
            }
            if(i>=quan_caracter) break;
            if (LMaiusculass === true) {
                senha.push(this.geraStringAleatoria(1));
                i++;
            }
            if(i>=quan_caracter) break;
            if (LMinusculass === true) {
                senha.push(this.geraStringAleatoria(2));
                i++;
            }
            if(i>=quan_caracter) break;
            if(LSimboloss === true){
                senha.push(this.geraStringAleatoria(3));
                i++;
            }
            i--;
        }
        // console.log((String(senha)).replace(`/\D+/g`,``));
        return String(senha.join(``));
    }
    rand(min = 0, max = 5) {
        return String(Math.floor(Math.random() * (max - min) + max));
    }
    geraStringAleatoria(escolha) {
        let stringAleatoria = '';
        let caracteres;
        if (escolha === 1) {
            caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        } else if(escolha===2){
            caracteres= `abcdefghijklmnopqrstuvwxyz`;
        } 
        else if (escolha === 3) {
            caracteres = `#$%&()[]^_`;
        }
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        return stringAleatoria;
    }
}
