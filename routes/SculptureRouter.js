import express from 'express';
import { getAllSculptures, deleteSculptures, addSculpture, updateSculture, getOneSculpture } from '../controllers/SculptureController.js';
import sculpturesValidator  from '../validators/sculpturesValidator.js';

const router = express.Router();

router.get('/', getAllSculptures);

router.delete('/:id', deleteSculptures);

router.post('/', sculpturesValidator, addSculpture);  //el segundo parametro es un middleware

router.put('/:id', updateSculture);

router.get('/:id', getOneSculpture);

export default router;