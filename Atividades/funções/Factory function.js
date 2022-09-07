// pausa nos 15 min de video

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor){
            valor= valor.split(' '); // dividindo o valor recebido em pedaços utilizado separação por espaço
            console.log(valor);
            this.nome= valor.shift();
            console.log(valor);
            console.log(this.nome);
            this.sobrenome= valor.join(' ');
            console.log(this.sobrenome);
        },


        fala(assunto) { //metodo de modo curto
            return `${this.nome} está falando sobre ${assunto}`;
        },
        get imc() {
            const imc = (this.peso / this.altura ** 2);
            return imc.toFixed(2);
        },
        altura,
        peso

    };
}

const p1 = criaPessoa('Juan', 'Pablo', 1.8, 60);
const p2 = criaPessoa('Cirilo', 'Joaquino');
console.log(p2.fala('futebol'));
console.log(p1.imc);
console.log(p1.nomeCompleto);

p1.nomeCompleto = 'Juan Pablo Eugenio Silva';