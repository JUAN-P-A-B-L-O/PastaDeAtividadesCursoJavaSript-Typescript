// function coletaForm() {
//     let funcionarios=[];
//     const form = document.querySelector('.form');
//     const resultado=document.querySelector('.resultado');
//     function coletaDados(evento) {
//         evento.preventDefault();
//         const funcionario = form.querySelector('.funcionario');
//         const hora = form.querySelector('.hora');
//         const preco = form.querySelector('.preco');
//         const taxa = form.querySelector('.taxa');
//         let calculo=calculadora(hora.value,preco.value,taxa.value)
//         entrega(resultado, calculo);

//         console.log(maiorEntre(hora.value, preco.value));


//     }
//     form.addEventListener('submit',coletaDados);

// }
// function calculadora(hora, preco, taxa){
//     let bruto = hora * preco;
//     liquid = bruto - (bruto * taxa / 100);
//     return liquid;
// }
// function entrega(para, calculo){
//     let fala=`Seu resultado final é ${calculo}`;
//     para.innerHTML=fala;
// }
// function maiorEntre(a,b){
//     let total;
//     a>b? total=a:total=b;  
//     return total;
// }
// coletaForm();
const check =(numero)=>{
    if((typeof numero)!=='number'){return "Faz direito cara, n alastra";}
    if(numero%3===0&&numero%5===0) {return "FizzBuzz";}
    if(numero%3===0){return "Fizz";}
    if(numero%5===0){return "Buzz";}
    return numero;
    
} 
for(let i=0; i<100;i++){
    console.log(check(i));
}
console.log(check('a'));