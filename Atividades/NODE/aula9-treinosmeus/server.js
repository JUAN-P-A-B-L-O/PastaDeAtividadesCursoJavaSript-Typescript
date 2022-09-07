const express = require(`express`);
const app = express();
const routes = require(`./routes`)

app.use(express.urlencoded({extended: true}))

app.use(routes);

app.listen(3030,()=> {
    console.log(`Acessao http://localhost:3030`);
})














