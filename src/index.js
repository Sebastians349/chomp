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
    "APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410",
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
