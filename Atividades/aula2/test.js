function coletaForm() {
    let funcionarios=[];
    const form = document.querySelector('.form');
    const resultado=document.querySelector('.resultado');
    function coletaDados(evento) {
        evento.preventDefault();
        const funcionario = form.querySelector('.funcionario');
        const hora = form.querySelector('.hora');
        const preco = form.querySelector('.preco');
        const taxa = form.querySelector('.taxa');
        let calculo=calculadora(hora.value,preco.value,taxa.value)
        entrega(resultado, calculo);
        
    }
    form.addEventListener('submit',coletaDados);
    
}
function calculadora(hora, preco, taxa){
    let bruto = hora * preco;
    liquid = bruto - (bruto * taxa / 100);
    return liquid;
}
function entrega(para, calculo){
    let fala=`Seu resultado final é ${calculo}`;
    para.innerHTML=fala;
}
coletaForm();
