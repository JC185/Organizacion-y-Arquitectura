const express = require('express');
const fs = require('fs');
const app = express();

const port = 3000;

app.get('/Empleados.js', (req, res) => {
    let LisAut=fs.readFileSync(LisAutos.json);
    LisAut = JSON.parse(LisAut);
    res.send({Make:["Ford"]});
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});