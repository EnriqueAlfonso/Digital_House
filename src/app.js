/* Modulos Nativos. */
const fs = require("fs");
const path = require("path");
const path_public = path.resolve("../public");

/* Modulos Instalados. */
const express = require("express");
const app = express();

/* Modulos Personales. */
const routes_index = require("./routes/index");
const indexController = require("./controllers/indexController");

app.listen(3000, console.log("Port: 3000"));

/* Motor de Plantillas: EJS. */
app.set("view engine", "ejs");

app.use(express.static(path_public));

app.use("/", routes_index);

app.get("/sports", (req, res) => 
{
    let path_sports = path.resolve(__dirname, "./views/sports.html");
    res.sendFile(path_sports);
});

/* ================================================================================================ */
/*
app.use("/product", routes_product);
app.use("/subscribe", routes_subscribe);
app.use("/login", routes_login);
app.use("/basket", routes_basket);

    app.get();
    
    app.get("/", indexController.print);
    
    app.get("/product", productController.print);
    
    app.get("/subscribe", subscribeController.print);
    
    app.get("/login", loginController.print);
    
    app.get("/basket", basketController.print);

    app.get("/product/:id", (req, res) => 
    {
        let id_product = req.params.id;
        res.send("Producto: " + id_product);
    });

    app.get("/sports/:id_sport/:id_country/:id_team?", (req, res) => 
    {
        let id_sport = req.params.id_sport;
        let id_country = req.params.id_country;
        let id_team = req.params.id_team;

        if (id_team == undefined)
        {res.send("EQUIPO NO ELEGIDO.");} 
        else {res.send("Deporte: " + id_sport + " || Pais: " + id_country + " || Equipo: " + id_team);}
    });

    app.get("/chacarita/:id_jugador?", (req, res) => 
    {
        let jugador = req.params.id_jugador || "NO ELEGISTE NINGUN JUGADOR";
        res.send(jugador);
    });
*/
/* ================================================================================================ */
