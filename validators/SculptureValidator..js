import { body } from 'express-validator';

export const sculptureValidationRules = [
 body('title').notEmpty().withMessage('Title is required'),
 body('author').notEmpty().withMessage('Author is required'),
 body('material').notEmpty().withMessage('Material is required'),
 body('year').isInt({ gt: 0 }).withMessage('Creation Year is required'),
 body('location').notEmpty().withMessage('Location is required'),
];