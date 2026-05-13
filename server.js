const app = require('./app');
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
=======
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
>>>>>>> 8b64fe3b2d800d62343769fee1ed1ce59402e8da
