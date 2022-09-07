const { res } = require("./contato");
const HomeModel = require(`../models/HomeModel`);


exports.home = (req, res)=>{
    res.render(`index`);
    return;
}

exports.trataPost = (req,res)=>{
    res.send(req.body);
    return;
}