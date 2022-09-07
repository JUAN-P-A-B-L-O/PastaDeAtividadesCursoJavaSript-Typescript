function Produto(nome, preco){
    this.nome=nome;
    this.preco=preco;
}
Produto.prototype.aumento= function(valor){
    this.preco= this.preco+(this.preco*valor/100);
}
Produto.prototype.desconto= function(valor){
    this.preco= this.preco-(this.preco*valor/100);
}

function Camiseta(nome, preco, cor){
    Produto.call(this,nome, preco)
    this.cor=cor;
}
Camiseta.prototype= Object.create(Produto.prototype);
Camiseta.prototype.constructor= Camiseta;
const p1 = new Produto(`bala`, 100);

const camiseta= new Camiseta(`Regata`, 7.5, `Preta`);

Camiseta.prototype.aumento= function(valor_real){
    this.preco+= valor_real;
}


camiseta.aumento(1000);

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material= material;

    Object.defineProperty(this, `estoque`, {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== `number`){
                return;
            }
            estoque= valor;
        }
    })
}
Caneca.prototype= Object.create(Produto.prototype);

Caneca.prototype.constructor= Caneca;

const c1= new Caneca(`Caneca1`, 10, `depobre`,100);





c1.aumento(100)

//////////////////////////////////
console.log(c1.preco)
console.log(p1);
console.log(camiseta);
console.log(c1.estoque);