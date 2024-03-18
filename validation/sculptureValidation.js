import { body } from 'express-validator';
import validateResult from '../helpers/validationResult.js'; 

const validatePostSculpture = [
  body('image_url').isURL(),
  body('title').notEmpty(),
  body('author').notEmpty(),
  body('material').notEmpty(),
  body('year').isInt(),
  body('location').notEmpty().withMessage('Location is required'),
  (req, res, next) =>{
    validateResult(req, res, next)
}
];

export default validatePostSculpture;
