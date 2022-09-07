function Produto(nome, preco, estoque) {
    // this.nome= nome;
    // this.preco= preco;

    Object.defineProperty(this, `estoque`, {
        enumerable: true, // mostra, ou não, a chave 
        value: estoque, // valor 
        writable: false, //Controla se o valor pode, ou nao, ser alterado
        configurable: false, // controla se pode, ou nao, reconfigurar\apagar a chave
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra, ou não, a chave 
            value: nome, // valor 
            writable: false, //Controla se o valor pode, ou nao, ser alterado
            configurable: false, // controla se pode, ou nao, reconfigurar\apagar a chave
        },
        preco: {
            enumerable: true, // mostra, ou não, a chave 
            value: preco, // valor 
            writable: false, //Controla se o valor pode, ou nao, ser alterado
            configurable: false, // controla se pode, ou nao, reconfigurar\apagar a chave
        },
    })
}
const pro_short = new Produto(`short`, 60, 2);
console.log(pro_short);