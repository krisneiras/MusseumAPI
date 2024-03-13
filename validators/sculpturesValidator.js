import { check } from "express-validator";
import validateResult from "../helpers/validateResult.js";

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

    check('material')
    .exists()
    .notEmpty(),

    check('year')
    .exists()
    .notEmpty()
    .isInt({ min: 1, max: 2100}).withMessage("El año introducido no es correcto"),

    check('location')
    .exists()
    .notEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export default sculpturesValidator;
