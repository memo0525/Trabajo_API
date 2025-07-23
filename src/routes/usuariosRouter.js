const express = require('express');
const router = express.Router();
const controlador = require('../controllers/usuariosController');

router.get('/', controlador.obtenerUsuarios);
router.post('/', controlador.agregarUsuario);
router.put('/:id', controlador.editarUsuario);
router.delete('/:id', controlador.eliminarUsuario);

module.exports = router;
