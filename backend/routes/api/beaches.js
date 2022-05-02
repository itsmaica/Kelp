const express = require('express');
const asyncHandler = require('express-async-handler')

//not sure if needed yet
const { setTokenCookie, restoreUser } = require('../../utils/auth');

//need to make Beaches table/model
const { Beach } = require('../../db/models');

//validations needed?
//make sure the form is filled out correctly

const router = express.Router();

//create a beach
// router.post(
//     "/beaches",
//     //beach validation needed?
//     asyncHandler(async(req, res, next) => {

//     })
// )
