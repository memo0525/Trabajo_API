const db = require('../config/db');

const UsuariosModel = {
  obtenerTodos: (callback) => {
    db.query('SELECT * FROM usuarios', callback);
  },

  agregar: (usuario, callback) => {
    db.query('INSERT INTO usuarios SET ?', usuario, callback);
  },

  editar: (id, usuario, callback) => {
    db.query('UPDATE usuarios SET ? WHERE id = ?', [usuario, id], callback);
  },

  eliminar: (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
  }
};

module.exports = UsuariosModel;


