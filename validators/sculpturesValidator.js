import { check } from 'express-validator';
import validateResult from '../helpers/validateResult.js';

const sculpturesValidator = [
    check('image_url')
        .exists()
        .notEmpty()
        .withMessage('Se requiere este campo'),
    check('title')
        .exists()
        .notEmpty()
        .withMessage('Se requiere este campo'),
    check('author')
        .exists()
        .notEmpty()
        .withMessage('Se requiere este campo'),
    check('material')
        .exists()
        .notEmpty()
        .withMessage('Se requiere este campo'),
    check('year')
        .exists()
        .isNumeric().withMessage('Debe ser un valor numérico'),
    check('location')
        .exists()
        .notEmpty()
        .withMessage('Se requiere este campo'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export default sculpturesValidator;
