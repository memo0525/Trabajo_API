const express = require('express');
const cors = require('cors');
const usuariosRouter = require('./src/routes/usuariosRouter');
require('./src/config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
