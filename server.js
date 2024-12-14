const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.send('<h1>¡Hola desde Express y Socket.IO!</h1>');
});

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
