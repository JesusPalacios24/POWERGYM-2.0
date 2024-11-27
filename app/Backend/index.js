const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9001;
const app = express();

app.get(express.json())

app.get('/', (req, sed) =>{
    res.sed("Conexion Establecida");
});

//conexion con mogngo
mongoose
.connect(process.env.URI_MONGO)
.then(()=> console.log("Se concecto a la BD de mongo"))
.catch((error) => console.log(error));

app.listen(PORT, () => console.log("Servidor Funcionando en el puerto", PORT));