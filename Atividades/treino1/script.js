function calculaImc(){
    const form=document.querySelector('.form');
    const enviar=document.querySelector('.resultado');


    function RecebeEenvia(evento){
        evento.preventDefault();
        const peso=form.querySelector('.peso');
        const altura=form.querySelector('.altura');
        let resultado= peso.value/(altura.value**2);
        
        enviar.innerHTML= resultado;

    }

    form.addEventListener('submit',RecebeEenvia);


}
calculaImc();