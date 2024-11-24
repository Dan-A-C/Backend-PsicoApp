const express = require('express');
const router = express.Router();
const { Reporte } = require('../models');

// Obtener todos los reportes
router.get('/', async (req, res) => {
  try {
    const reportes = await Reporte.findAll();
    res.json(reportes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los reportes' });
  }
});

// Crear un nuevo reporte
router.post('/', async (req, res) => {
  try {
    const { sesionId, tipo, descripcion, sugerencia, pacienteId } = req.body;
    const nuevoReporte = await Reporte.create({ sesionId, tipo, descripcion, sugerencia, pacienteId });
    res.status(201).json(nuevoReporte);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el reporte' });
  }
});

// Obtener un reporte por ID
router.get('/:id', async (req, res) => {
  try {
    const reporte = await Reporte.findByPk(req.params.id);
    if (reporte) {
      res.json(reporte);
    } else {
      res.status(404).json({ error: 'Reporte no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el reporte' });
  }
});

// Actualizar un reporte
router.put('/:id', async (req, res) => {
  try {
    const { sesionId, tipo, descripcion, sugerencia, pacienteId } = req.body;
    const reporte = await Reporte.findByPk(req.params.id);
    if (reporte) {
      reporte.sesionId = sesionId;
      reporte.tipo = tipo;
      reporte.descripcion = descripcion;
      reporte.sugerencia = sugerencia;
      reporte.pacienteId = pacienteId;
      await reporte.save();
      res.json(reporte);
    } else {
      res.status(404).json({ error: 'Reporte no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el reporte' });
  }
});

// Eliminar un reporte
router.delete('/:id', async (req, res) => {
  try {
    const reporte = await Reporte.findByPk(req.params.id);
    if (reporte) {
      await reporte.destroy();
      res.json({ message: 'Reporte eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Reporte no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el reporte' });
  }
});

module.exports = router;
