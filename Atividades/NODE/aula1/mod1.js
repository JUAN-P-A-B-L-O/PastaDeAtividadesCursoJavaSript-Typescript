
const nome = `Luiz`;
const sobrenome = `Miranda`;


const falaNome=()=>{
    const retorno= nome+` `+ sobrenome;
    return retorno;
};

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.sobrenome = sobrenome;

exports.nome =nome;
exports.sobrenome =sobrenome;
exports.falaNome= falaNome;
