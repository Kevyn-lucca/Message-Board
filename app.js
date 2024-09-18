const express = require("express");
const app = express();

const Mensagens = [{
    texto: "Chamando todos os cornos",
    usuario: 'jose',
    criado: new Date() //? deve salvar a data que o usuario fez a mensagem.
},
{
    texto: "Peguei atras do armario+++",
    usuario: 'Mario',
    criado: new Date()
}];

const links = [
    {href: "/", text: "home"},
    {href: "messages", text: "mensagens"},
]

const path = require("node:path")

//? Necessario para utilizar um form
app.use(express.urlencoded({ extended: true }));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")

app.get("/", (req,res) => {
    res.render("index", {links: links});
});

app.get("/messages", (req,res) =>{
    res.render("board", {Mensagens: Mensagens, links: links});
});

app.post("/messages", (req, res) => {
    const { texto, usuario } = req.body; 
    Mensagens.push({texto: texto, usuario: usuario, criado: new Date()});
    res.redirect("/messages"); 
});

const PORT = 8888;

app.listen(PORT, () => console.log(`Servidor rodando no port ${PORT}`));



