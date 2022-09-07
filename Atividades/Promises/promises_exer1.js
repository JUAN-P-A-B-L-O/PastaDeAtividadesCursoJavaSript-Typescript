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
    });




}


esperaAi(`fala 1`, rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(`fala 2`, rand(1, 30));
    })
    .then(resposta=>{
        console.log(resposta);
        return esperaAi(`fala 3`,rand(1,2));
    })
    .then(resposta=>{
        console.log(resposta);
        return;
    })
    .catch();
