const express = require('express')
const app = express()
const port = 3000
const path = require('path');

const promotions = [
  {
    id: 1,
    name: "Nombre",
    price: 10,
    image: "asset/images/producto-1.jpg",
  },
  {
    id: 2,
    name: "Nombre",
    price: 20,
    image: "asset/images/producto-2.jpg",
  },
  {
    id: 3,
    name: "Nombre",
    price: 30,
    image: "asset/images/producto-3.jpg",
  },
  {
    id: 4,
    name: "Nombre",
    price: 40,
    image: "asset/images/producto-4.jpg",
  },
  {
    id: 5,
    name: "Nombre",
    price: 50,
    image: "asset/images/producto-5.jpg",
  },
];

app.get('/api/promotions', (req, res) => {
  res.json(promotions);
});

app.get('/promotions', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'promotions.html'));
});

app.use("/", express.static(path.join(__dirname, "frontend")));

// Middleware para mostrar la URL de la solicitud
// app.use((req, res, next) => {
//     console.log(`Request URL: ${req.url}`);
//     next();
// });

app.listen(port, () => {
  console.log(`Backend corriendo en el puerto http://localhost:${port}`)
});