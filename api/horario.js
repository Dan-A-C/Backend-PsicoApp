const express = require('express');
const router = express.Router();
const { Horario } = require('../models');

// Obtener todos los horarios
router.get('/', async (req, res) => {
  try {
    const horarios = await Horario.findAll();
    res.json(horarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los horarios' });
  }
});

// Crear un nuevo horario
router.post('/', async (req, res) => {
  try {
    const { fecha, hora } = req.body;
    const nuevoHorario = await Horario.create({ fecha, hora });
    res.status(201).json(nuevoHorario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el horario' });
  }
});

// Obtener un horario por ID
router.get('/:id', async (req, res) => {
  try {
    const horario = await Horario.findByPk(req.params.id);
    if (horario) {
      res.json(horario);
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el horario' });
  }
});

// Actualizar un horario
router.put('/:id', async (req, res) => {
  try {
    const { fecha, hora } = req.body;
    const horario = await Horario.findByPk(req.params.id);
    if (horario) {
      horario.fecha = fecha;
      horario.hora = hora;
      await horario.save();
      res.json(horario);
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el horario' });
  }
});

// Eliminar un horario
router.delete('/:id', async (req, res) => {
  try {
    const horario = await Horario.findByPk(req.params.id);
    if (horario) {
      await horario.destroy();
      res.json({ message: 'Horario eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el horario' });
  }
});

module.exports = router;
