const express = require('express');
const path = require('path');
const app = express();

// Sirve los archivos estáticos desde dist
app.use(express.static('./dist/proyecto1'));

// Maneja las rutas de Angular
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/proyecto1/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);