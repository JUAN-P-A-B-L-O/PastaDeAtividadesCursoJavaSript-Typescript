exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
};

exports.tratarSenha = (req, res)=>{
  res.render(`index`);
  console.log(req.body.password)
}