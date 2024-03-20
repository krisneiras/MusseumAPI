import express from "express";
import { addNewSculpture, editSculpture, getAllSculptures, deleteSculpture, getOneSculpture } from "../controllers/SculptureController.js"
import { sculptureValidationRules } from "../validators/SculptureValidator..js";

const router = express.Router() //estamos invocado el enrutador

router.get('/', getAllSculptures);

//DELETE

router.delete('/:id', deleteSculpture);

// POST

router.post('/', sculptureValidationRules, addNewSculpture);

// PUT

router.put('/:id', sculptureValidationRules, editSculpture);

// GET ONE

router.get('/:id', getOneSculpture);


export default router;