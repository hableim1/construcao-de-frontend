const http = require('http');

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Define o status como 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Define o tipo de conteúdo como texto
  res.end('Olá, Pessoal!\n'); // Envia a resposta
});

// Define a porta em que o servidor irá escutar
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
