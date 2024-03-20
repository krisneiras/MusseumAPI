import { body } from 'express-validator';
import validateResult from '../helpers/validationResult.js';

export const sculptureValidationRules = [
 body('image_url').notEmpty().withMessage('An url is required').isURL({
    protocols: ['http', 'https'],
    require_protocol: true,
 }).withMessage('Must be https format'),
 body('title').notEmpty().withMessage('Title is required'),
 body('author').notEmpty().withMessage('Author is required').isLength({min:3, max:100}),
 body('material').notEmpty().withMessage('Material is required'),
 body('year').isInt({ gt: 0 }).withMessage('Creation Year is required'),
 body('location').notEmpty().withMessage('Location is required'),
 (req, res, next) =>{
   validateResult(req, res, next)
}
];

//aqui es donde voy a hacer todas mis validaciones,  las exporto porque tengo que importarlas dentro de mi router

//middleware: es un paso intermedio