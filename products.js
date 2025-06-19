const express = require('express')
const app = express()
const port = 3000
const path = require('path');

const products = [
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
  {
    id: 6,
    name: "Nombre",
    price: 60,
    image: "asset/images/producto-6.jpg",
  },
  {
    id: 7,
    name: "Nombre",
    price: 70,
    image: "asset/images/producto-7.jpg",
  },
  {
    id: 8,
    name: "Nombre",
    price: 80,
    image: "asset/images/producto-8.jpg",
  },
  {
    id: 9,
    name: "Nombre",
    price: 90,
    image: "asset/images/producto-9.jpg",
  },
  {
    id: 10,
    name: "Nombre",
    price: 100,
    image: "asset/images/producto-10.jpg",
  },
];

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'home.html'));
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
