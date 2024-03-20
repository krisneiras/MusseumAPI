import { validationResult } from "express-validator"; 

const validateResult = (req, res, next) => {
    try {
        const result = validationResult(req)
        result.throw()
        return next()
    } catch(error) {
        res.status(400).json({ errors: error.array() });
    }
}
export default validateResult;





