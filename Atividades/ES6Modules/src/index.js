import{ nome as nome2, sobrenome, idade, soma} from "./modulo1";
let nome = `juan`;
console.log(nome2, sobrenome, idade);
console.log(soma(3,4));

function falaNome(nome){
    console.log(`${nome} está falando!`);
}

falaNome(nome2);
falaNome(nome);
nome=`gato`;
falaNome(nome);