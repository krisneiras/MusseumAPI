import { validationResult } from 'express-validator';

const validateResult = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    next(); // Si no hay errores de validación, continúa con la siguiente función middleware
};

export default validateResult;

