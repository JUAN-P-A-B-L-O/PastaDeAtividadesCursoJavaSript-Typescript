function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })


}

esperaAi(`bateu`, rand(1, 6))
    .then(resposta=>{
        console.log(resposta);
        return esperaAi(`na`, rand(1, 6));
    })
    .then(resposta=>{
        console.log(resposta);
        return esperaAi(`parede`, rand(1,6));
    })
    .then(resposta=>{
        console.log(resposta);
    })
    .catch();