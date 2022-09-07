function Produto(nome, preco){
    this.nome=nome;
    this.preco= preco;
}


Produto.prototype.preco2= function(){
    return this.preco*=2;
}

const p1= new Produto(`bala`, 10);
console.log(p1.nome)
console.log(p1.preco2())