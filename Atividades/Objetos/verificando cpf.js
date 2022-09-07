// 705.484.450-52   070.987.720-03

// 7  0   5   4   8   4   4   5    0
//x10 x9  x8  x7  x6  x5  x4  x3   x2    
// 70 0   40  28  48   20  16  15  0        == x


//primeiro digito: 11-(237%11) ==5(se for maior que 9, ent primeiro digito ===0)
// 7  0   5   4   8   4   4   5   0   5
//x11 x10 x9  x8  x7  x6  x5  x4  x3  x2   
//                                      //== x
//segundo digito é a mesma forma, só o total que vai ser evidentemente maior


// dicas: reduce()

//let cpf = `705.484.450-52`
//let cpfLimpo= cpf.replace(/\D+/g, ``);
//console.log(cpfLimpo) === `70548445052`

// cpfArray= Array.from(cpfLimpo); ==== pra fazer virar Array
function VerificadorCpf(cpf) {
    const cpfInput = cpf;
    const cpfLimpo = cpfInput.replace(/\D+/g, ``);
    // console.log(cpfLimpo);
    let cpfArray = Array.from(cpfLimpo);
    const cpfCompara = [...cpfArray];
    cpfArray.pop();
    cpfArray.pop();
    let aux_total = 0;

    function reduc(Array, multiplicadorInicial) {
        Array.reduce((acumulador, valor, index) => {
            const valorNumber = Number(valor);
            const valorCorrigido = valorNumber * (multiplicadorInicial - index);
            valor = valorCorrigido;
            aux_total += valorCorrigido;
        }, 0)
    }
    function ComparadorCpf(antes, depois) {
        return (antes === depois);
    }
    function produzDigito(aux_total_d) {
        let digito = 11 - (aux_total_d % 11);
        return digito> 9 ? `0`: String(digito)
    }
    reduc(cpfArray, 10);
    cpfArray.push(produzDigito(aux_total));
    aux_total = 0;
    reduc(cpfArray, 11);
    cpfArray.push(produzDigito(aux_total));
    const cpfArrayString = cpfArray.toString();
    const cpfComparaString = cpfCompara.toString();
    console.log(cpfArrayString);
    console.log(cpfComparaString);
    console.log(ComparadorCpf(cpfComparaString, cpfArrayString));
}

VerificadorCpf(`133.795.176-58`);