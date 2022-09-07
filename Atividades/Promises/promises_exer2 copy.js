function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject,) => {
        


        setTimeout(() => {
            if (typeof msg !== `string`) {
                reject(`deu pinote`);
                return;
            }


            resolve(msg);
        }, tempo);
    }

    )
}
// esperaAi(`fala`, rand(1,5))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi(`fala2`, rand(1,5));
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .catch();

async function executa() {
    try {
        const e1 = await esperaAi(`fala`, rand(1, 2));
        console.log(e1);
        const e2 = await esperaAi(`fala 2`, rand(1, 2));
        console.log(e2);
        const e3 = await esperaAi(`fala 3`, rand(1, 2));
        console.log(e3);
        const e4 = await esperaAi(4, rand(1, 2));
    } catch(e){
        console.log(e);
    }


}
executa();