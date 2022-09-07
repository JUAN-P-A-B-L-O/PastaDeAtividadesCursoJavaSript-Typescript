const fs= require(`fs`).promises;
const { stat } = require("fs");
const path= require(`path`);

async function readdir(rootDir){
    rootDir= rootDir || path.resolve(__dirname);
    const files= await fs.readdir(rootDir);
    walk(files, rootDir);
}



async function walk(files, rootDir){
    for(let file of files){
        const fileFull= path.resolve(rootDir, file)
        const stats= await fs.stat(fileFull);
        if(stats.isDirectory()){
            readdir(fileFull);
            continue;
        }
        console.log(file, stats.isDirectory());
    }
}
readdir(`../..`);

// rever essa aula, muito conteudinho diferente- vou lembrar nunca 