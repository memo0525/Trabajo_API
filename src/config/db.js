const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // cambia si tu usuario es diferente
  password: '',           // pon tu contraseña si tiene
  database: 'api_usuarios'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Conectado a la base de datos MySQL');
});

module.exports = connection;
