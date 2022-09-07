// function mostraHora() {
//     let data = new Date();
//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false
//     });
// }

// setInterval(function (){
//     console.log(mostraHora());
// }, 2000);





let cronometro_real = 10800000;
let magia;
let cronometro_aux = 10800000;// started for 00:00:00 o'clock

cronometro = setInterval(function mili() {
    cronometro_real += 1000;
    magia= new Date(cronometro_real);
    

        
    let horas = magia.getHours();
    if(horas<10){
        horas= `0${horas}`;
    }
    
    let minutos = magia.getMinutes();
    if(minutos<10){
        minutos= `0${minutos}`;
    }

    let segundos= magia.getSeconds();
    if(segundos<10){
        segundos= `0${segundos}`;
    }
    
    let cronometro_pronto=`${horas}:${minutos}:${segundos}`;
    console.log(cronometro_pronto);
    return cronometro_pronto;
    
}, 1000);

mostra_resultado= setInterval( function aux(){
    
} )