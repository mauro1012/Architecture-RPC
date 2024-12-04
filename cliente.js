const { Client } = require('rpc-websockets');

// Crear el cliente RPC
const client = new Client('ws://localhost:8080');

// Llamar a los métodos del servidor una vez conectado
client.on('open', async () => {
  try {
    const sum = await client.call('add', { a: 9, b: 3 });
    console.log(`Resultado de la suma: ${sum}`);

    const product = await client.call('multiply', { a: 6, b: 2 });
    console.log(`Resultado de la multiplicación: ${product}`);

    const greeting = await client.call('greet', { name: 'Mauro' });
    console.log(greeting);
  } catch (error) {
    console.error('Error al llamar al servidor:', error);
  } finally {
    client.close();
  }
});
