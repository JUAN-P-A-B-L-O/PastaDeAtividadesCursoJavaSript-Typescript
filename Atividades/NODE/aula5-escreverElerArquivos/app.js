

const escreve = require(`./modules/escrever`);
const path= require(`path`);


const caminhoArquivo = path.resolve(__dirname, `teste.json`);
const ler = require(`./modules/ler`)


// const pessoas = [
//     {nome: `Joao222`},
//     {nome: `Maria`},
//     {nome: `Eduardo`},
//     {nome: `Luiza`},
// ];
// const json = JSON.stringify(pessoas, ``, 2);
// escreve(caminhoArquivo, json);


async function leArquivo(caminho){
    const aux = await ler(caminho);
    rederizaDados(aux);
}

function rederizaDados(dados){
    dados= JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);
