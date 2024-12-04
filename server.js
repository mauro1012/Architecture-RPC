const { Server } = require('rpc-websockets');

// Crear el servidor RPC
const server = new Server({
  port: 8080,
  host: 'localhost',
});

console.log('Servidor RPC en ejecución en ws://localhost:8080');

// Registrar los métodos RPC
server.register('add', ({ a, b }) => {
  return a + b;
});

server.register('multiply', ({ a, b }) => {
  return a * b;
});

server.register('greet', ({ name }) => {
  return `¡Hola, ${name}!`;
});
