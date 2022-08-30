function criaCalculadora() {
    return {

        display: document.querySelector('.display'),
        


       
        inicia() {
            this.cliqueButoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e)=>{

                if(e.keyCode==13){
                    this.realizaConta();
                }
            });
        },

        apagaUm(){
            this.display.value= this.display.value.slice(0,-1);
        },

        realizaConta(){
            let conta= this.display.value;
            
            try{
                conta=eval(conta);
                if(!conta){
                    alert('Conta invalida');
                    return;
                }
                this.display.value=conta;
            } catch(e){
                alert('Conta Inválida');
                return;
            }
        },

        clearDisplay(){
            this.display.value="";
        },

        cliqueButoes() {
            document.addEventListener("click", (e)=> {
                const el = e.target;
                
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            
            } );

        },
        
        btnParaDisplay(valor) {
            this.display.value+=valor;
            this.display.focus();
        },
    };
}
criaCalculadora();
const calculadora = criaCalculadora();
calculadora.inicia();

//16min de video