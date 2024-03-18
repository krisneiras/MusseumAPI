import express from 'express'; 
import { getAllSculptures, deleteSculpture, postSculpture, putSculpture } from '../controllers/SculptureController.js';
import SculpturesValidator from '../validation/sculptureValidation.js'; 

const router = express.Router();

router.get('/', getAllSculptures);
router.post('/', SculpturesValidator, postSculpture); 
router.put('/:id', SculpturesValidator, putSculpture); 
router.delete('/:id', deleteSculpture);

export default router;







