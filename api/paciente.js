const express = require('express');
const router = express.Router();
const { Paciente } = require('../models');

// Obtener todos los pacientes
router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pacientes' });
  }
});

// Crear un nuevo paciente
router.post('/', async (req, res) => {
  try {
    const { historial, diagnostico } = req.body;
    const nuevoPaciente = await Paciente.create({ historial, diagnostico });
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el paciente' });
  }
});

// Obtener un paciente por ID
router.get('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ error: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el paciente' });
  }
});

// Actualizar un paciente
router.put('/:id', async (req, res) => {
  try {
    const { historial, diagnostico } = req.body;
    const paciente = await Paciente.findByPk(req.params.id);
    if (paciente) {
      paciente.historial = historial;
      paciente.diagnostico = diagnostico;
      await paciente.save();
      res.json(paciente);
    } else {
      res.status(404).json({ error: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el paciente' });
  }
});

// Eliminar un paciente
router.delete('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (paciente) {
      await paciente.destroy();
      res.json({ message: 'Paciente eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el paciente' });
  }
});

module.exports = router;
