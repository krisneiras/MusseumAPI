import { check } from "express-validator";
import  validateResult  from '../helpers/validateResult.js';

const sculpturesValidator =[
    check('image_url')
        .exists()
        .notEmpty(),
    check('title')
        .exists()
        .notEmpty(),
    check('author')
        .exists()
        .notEmpty(), 
    check('year')
        .exists()
        .isNumeric()
        .withMessage('Tiene q ser un dato númerico')
        .isLength({min: 3, max: 4}),
    (req, res, next) =>{
        validateResult(req, res, next)
    }
]

export default sculpturesValidator;