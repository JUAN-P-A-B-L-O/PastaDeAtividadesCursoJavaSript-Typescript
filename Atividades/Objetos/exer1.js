const pessoa = {
    // let nome,
    idade: 22,
    festa: 10,
    fe: 7,
    get coBuniteza(){
        return (this.idade+this.festa)*this.fe;
    }
}

console.log(pessoa.coBuniteza);