const express= require(`express`);
const app = express();
const routes = require(`./router`)

app.use(express.urlencoded({ extended: true}));
app.use(routes);

app.listen(3000, ()=> {
    console.log(`Acessao http://localhost:3000`);
    console.log(`Servidor executando na porta 3000`);
});

