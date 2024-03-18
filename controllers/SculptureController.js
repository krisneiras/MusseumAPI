import express from 'express';
import { validationResult } from 'express-validator'; // Corrección en la importación de validationResult
import Sculpture from '../models/SculptureModel.js';

const router = express.Router();

export const getAllSculptures = async (req, res) => {
  try {
    const sculptures = await Sculpture.findAll();
    res.status(200).json(sculptures);
  } catch (error) {
    console.error('Error al recuperar las esculturas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const postSculpture = async (req, res) => {
  try {

    const newSculpture = await Sculpture.create(req.body)
    // /{
    //   image_url,
    //   title,
    //   author,
    //   material,
    //   year,
    //   location
    // });
    res.status(201).json(newSculpture);
  } catch (error) {
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const putSculpture = async (req, res) => {
  try {

    await Sculpture.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Escultura actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar la escultura:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const deleteSculpture = async (req, res) => {
  try {
    const { id } = req.params;
    const sculpture = await Sculpture.findByPk(id);
    if (!sculpture) {
      return res.status(404).json({ message: 'Escultura no encontrada' });
    }
    await sculpture.destroy();
    res.status(200).json({ message: 'Escultura eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la escultura:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};






