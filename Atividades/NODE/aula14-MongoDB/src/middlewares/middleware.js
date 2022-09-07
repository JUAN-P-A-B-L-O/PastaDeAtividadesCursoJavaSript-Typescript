module.exports = (req, res, next)=>{
    console.log();
    console.log(`Passei no middleware global`);
    if(req.body.cliente){
        console.log(`Vi que foi postado : ${req.body.cliente}`)
    }
    console.log();
    next();
};