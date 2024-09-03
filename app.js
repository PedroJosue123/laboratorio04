const express = require("express");
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const clientes = require('./routes/clientes');
const productos = require('./routes/productos');

app.use('/',clientes);
app.use('/productos',productos);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
