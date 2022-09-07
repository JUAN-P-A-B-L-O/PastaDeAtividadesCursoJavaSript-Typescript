function Pessoa(nome, altura, peso) {
    this.nome = nome
    this.altura = altura
    this.peso = peso
}

Pessoa.prototype.IMC = function () {
    return (this.peso / (this.altura ** 2));
};

const p1 = new Pessoa(`Juan`, 1.8, 60);

const p2 = {
    nome: `Festa`,
    altura: 2,
    peso: 16,
}

const p3 = Object.create(Pessoa.prototype,
    {
        altura :{
            value: 3
        },
        peso: {
            value:27
        },
    });
Object.setPrototypeOf(p2, Pessoa.prototype);
console.log(p1.IMC());
console.log(p2.IMC());
console.log(p3.IMC());