const express= require(`express`);
const app = express();

app.use(express.urlencoded({
    extended:true,
})
);

app.get(`/`, (req, res) => {
    res.send(`
    <form action= "/" method= "POST">
    Nome do cliente : <input type= "text" name="nome">
    <button>Enviar</button>
    </form> 
    `);
});

app.get(`/testes/:idUsuarios?/:parametro?`, (req, res)=>{
    console.log(req.params); // req.params acessa os parametros da URL
    console.log(req.query);
    res.send(req.query.facebookprofile);
})


app.post(`/`, (req, res)=>{
    res.send(`O que voce me enviou foi ${req.body.nome}`)
})

app.listen(3000, ()=> {
    console.log(`Acessao http://localhost:3000`);
    console.log(`Servidor executando na porta 3000`);
});

app.get(`/contato`, (req, res) =>{
    res.send(`Obrigado por entrar em contato com a gente`);
})