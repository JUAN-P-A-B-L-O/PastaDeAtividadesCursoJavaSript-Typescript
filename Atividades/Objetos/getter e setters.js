function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, `estoque`, {
        enumerable: true, // mostra, ou não, a chave     
        configurable: true, // controla se pode, ou nao, reconfigurar\apagar a chave
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== `number`){
                throw new TypeError(`Coloca certo cabecao!`);
            }
        }   
     });
}
const pro_short = new Produto(`short`, 60, 2);
pro_short.estoque=`asdfa`;
console.log(pro_short);
console.log(pro_short.estoque);


