const express = require("express");
const hbs = require("hbs")


require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (req, res)=>{
    res.render("home")
})
 
app.get("/registrarse", (req, res)=>{
    res.render("registrarse")
})

app.get("/contacto", (req, res)=>{
    res.render("contacto")
})

app.listen(port, ()=>{
    console.log("Escuchando el puerto OK")
})