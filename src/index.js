const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// SDK de Mercado Pago
const mercadopago = require("mercadopago");

app.use(bodyParser.urlencoded({ extended: false }));

// Agrega credenciales
mercadopago.configure({
  // este es el usuario q vende , la cuenta el de producccion
  access_token:
    "APP_USR-4684267517373888-112620-105c517fb870120a0d0a1960fcd19138-1027263712",
  // esta es la que va de la prueba anterior
  // "APP_USR-327784668252270-111502-2ac20dc1d5088b2e30bb07d2bfef4cbf-672708481",
});

// rutas
app.post("/checkout", (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response.body);
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// servidor

app.listen(3000, () => {
  console.log("server funcionando en puerto 3000");
});
