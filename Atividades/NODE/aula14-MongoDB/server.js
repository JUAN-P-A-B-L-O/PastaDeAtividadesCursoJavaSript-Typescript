require(`dotenv`).config();
const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        console.log(`Conectando à base de dados`);
        app.emit(`pronto`);
    })
    .catch(e=> console.log(e));




const routes = require(`./routes`);
const path = require(`path`);
const meuMiddleGlobal = require(`./src/middlewares/middleware`);

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, `public`)));

app.set(`views`, path.resolve(__dirname, `src`, `views`));
app.set(`view engine`, `ejs`);


app.use(meuMiddleGlobal);

app.use(routes);



app.on(`pronto`, () => {
    console.log(`Base de dados pronta, iniciando servidor...`);
    app.listen(3030, () => {
        console.log(`Acessao http://localhost:3030`);
    });
});









