const PORT = 3000;

const apiUrl = process.env.DEVELOPMENT ? `http://localhost:${PORT}` : 'https://chico.coisas-mais-estranhas.com.br'

export default {
  url: apiUrl,
  port: PORT
}