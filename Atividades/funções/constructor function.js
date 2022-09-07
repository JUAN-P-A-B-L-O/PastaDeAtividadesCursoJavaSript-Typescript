function Pessoa(nome, sobrenome){
    this.nome= nome;
    this.sobrenome= sobrenome;
}
const p1= new Pessoa(`juan`, `pablo`);

console.log(p1.nome, p1.sobrenome);