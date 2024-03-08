import express from "express";
import { addNewSculpture, getAllSculptures } from "../controllers/SculptureController.js"
import { deleteSculpture } from "../controllers/SculptureController.js"; 

const router = express.Router() //estamos invocado el enrutador

router.get('/', getAllSculptures)

export default router;

//DELETE

router.delete('/:id', deleteSculpture);

// POST

router.post('/', addNewSculpture)

// UPDATE

//PUT