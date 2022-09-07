const fs= require(`fs`).promises;
const path= require(`path`);


async function ender(Root){
     Root= Root || path.resolve(__dirname);
    const files = await fs.readdir(Root);
    walk(files);
}

function walk(files){
    for(let file of files){
        console.log(file);
    }
}

ender(`../..`);