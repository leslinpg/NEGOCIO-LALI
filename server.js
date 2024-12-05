const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Datos simulados (base de datos en memoria)
const clientes = {
  "juan-perez": {
    video: "https://mi-storage.com/videos/juan-perez.mp4",
    marcador: "https://mi-storage.com/imagenes/marker-juan-perez.png",
  },
  "maria-garcia": {
    video: "https://mi-storage.com/videos/maria-garcia.mp4",
    marcador: "https://mi-storage.com/imagenes/marker-maria-garcia.png",
  },
};

// Endpoint para obtener datos del cliente
app.get('/api/cliente/:id', (req, res) => {
  const clienteId = req.params.id;
  const data = clientes[clienteId];

  if (data) {
    res.json(data);
  } else {
    res.status(404).send({ error: 'Cliente no encontrado' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
