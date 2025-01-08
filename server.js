const express = require('express');
const path = require('path');
const app = express();

// Definimos la ruta correcta al directorio dist
const distPath = path.join(__dirname, 'dist/proyecto1/browser');

// Servir archivos estáticos desde el directorio dist
app.use(express.static(distPath));

// Manejar todas las rutas de Angular
app.get('/*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

// Iniciar el servidor
app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT || 8080}`);
});
