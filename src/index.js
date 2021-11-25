const express = require("express");
const app = express();

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});

// rutas
app.get("/checkout", (req, res) => {
  res.send("<h1> hola desde el CHO lalalalal</h1>");
});

// servidor

app.listen(3000, () => {
  console.log("server funcionando en puerto 3000");
});
