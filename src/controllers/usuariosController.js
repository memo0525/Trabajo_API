const UsuariosModel = require('../models/usuariosModel');

exports.obtenerUsuarios = (req, res) => {
  UsuariosModel.obtenerTodos((err, resultados) => {
    if (err) return res.status(500).json({ error: err });
    res.json(resultados);
  });
};

exports.agregarUsuario = (req, res) => {
  const nuevoUsuario = req.body;
  UsuariosModel.agregar(nuevoUsuario, (err, resultado) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Usuario agregado', id: resultado.insertId });
  });
};

exports.editarUsuario = (req, res) => {
  const id = req.params.id;
  const datos = req.body;
  UsuariosModel.editar(id, datos, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Usuario actualizado' });
  });
};

exports.eliminarUsuario = (req, res) => {
  const id = req.params.id;
  UsuariosModel.eliminar(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Usuario eliminado' });
  });
};
