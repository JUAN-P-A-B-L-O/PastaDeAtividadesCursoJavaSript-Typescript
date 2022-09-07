
function config(){
    //const estilosBody=getComputedStyle(document.body);
    const backgroundColorPadrao= "rgb(40, 83, 1)";

    const container=document.querySelector('.container');//selecionar
    const para=container.querySelectorAll('p');//selecionar os paragra.

    for(let i=0;i<para.length;i++){
    let estiloPara= getComputedStyle(document.body);
    // estiloPara.backgroundColor=backgroundColorPadrao;
    estiloPara.backgroundColor=backgroundColorPadrao;
    }
    console.log(backgroundColorPadrao);    
    
}
config();
//rgb(4, 73, 82)
