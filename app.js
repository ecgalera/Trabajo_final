// Arranco Express
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 3000;


app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("home")
})

app.get("/registrarse", (req, res)=>{
    res.render("registrarse")
})

app.get("/contacto", (req, res)=>{
    res.render("contacto")
})


app.get("*", (req, res)=>{
    res.render("Pagína no encontrada")
})

app.listen(port, ()=>{
    console.log("Escuchando en el pruerto: ", port);
})