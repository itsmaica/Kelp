const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils')

const id = check('id')
    .notEmpty()
    .withMessage('cannot be empty')
    .isInt({ min: 0 })
const category = check('category')
    .notEmpty()
    .withMessage('category cannot be empty')
const description = check('description')
    .notEmpty()
    .withMessage('description cannot be empty')
const address = check('address')
    .notEmpty()
    .withMessage('address cannot be empty')
const city = check('address')
    .notEmpty()
    .withMessage('city cannot be empty')
const state = check('state')
    .notEmpty()
    .withMessage('state cannot be empty')
const zipcode = check('zipcode')
    .notEmpty()
    .withMessage('zipcode cannot be empty')

exports.validateCreate = [
    id,
    category,
    description,
    address,
    city,
    state,
    zipcode
]

exports.validateUpdate = [
    id,
    category,
    description,
    address,
    city,
    state,
    zipcode
]
