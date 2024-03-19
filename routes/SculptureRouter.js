import express from "express";
import { getAllSculptures, createSculpture, updateSculpture, deleteSculpture } from
"../controllers/SculptureController.js";
import sculpturesValidator from "../validators/sculpturesValidator.js";

const router = express.Router() //estamos invocando al enrutador.

router.get('/', getAllSculptures)

router.post('/', sculpturesValidator, createSculpture);

router.put('/:id', updateSculpture);

router.delete('/:id', deleteSculpture);

export default router;
