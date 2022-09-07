function meuEscopo() {
    const pessoas=[];
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector(`.resultado`);
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        //console.log(nome.value,sobrenome.value,peso.value,altura.value);

        pessoas.push(nome.value);
        pessoas.push(sobrenome.value);
        pessoas.push(peso.value);
        pessoas.push(altura.value);
        

        console.log(pessoas[-4+pessoas.length]);
        console.log(pessoas[-3+pessoas.length]);
        console.log(pessoas[-2+pessoas.length]);
        console.log(pessoas[-1+pessoas.length]);
        resultado.innerHTML=pessoas;

    }
    form.addEventListener('submit', recebeEventoForm);
    
};
meuEscopo();

// salvar em um array os dados de cada utilizador
// Exibir no div tais dados salvos no input 