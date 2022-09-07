const { res } = require("./contato");

exports.home = (req, res)=>{
    res.render(`index`);
    return;
}

exports.trataPost = (req,res)=>{
    res.send(req.body);
    return;
}