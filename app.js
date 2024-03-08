const express = require('express');
const app = express();

const rotaProdutos = require('./src/routes/produtos')
const rotaPedidos = require('./src/routes/pedidos')


app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

module.exports = app;
