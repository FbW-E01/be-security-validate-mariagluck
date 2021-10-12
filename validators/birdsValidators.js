import { body } from 'express-validator';

const birdsValidators = [
    body("species").isLength({ min: 8 }).withMessage("species name is too short"),
    body("species").isLength({ max: 80 }).withMessage("species name is too long"),
    body("species").isString().matches(/^[A-Za-z\s]+$/).withMessage("must be only letters"),
    body("notes").isLength({max: 140}).withMessage("notes are too long"),
    body("notes").isString().matches(/^[A-Za-z\s]+$/).withMessage("must be only letters"),
    body("estimatedAmount").isInt()
];

export default birdsValidators;