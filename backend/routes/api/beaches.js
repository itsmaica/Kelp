const express = require('express');
const asyncHandler = require('express-async-handler')

//not sure if needed yet
const { setTokenCookie, restoreUser } = require('../../utils/auth');

//need to make Beaches table/model
const { Beach } = require('../../db/models');

//validations needed?
//make sure the form is filled out correctly

const router = express.Router();

//get beaches
router.get('/', asyncHandler(async function(_req,res){
    //might need to add more here
    const beaches = await Beach();
    return res.json(beaches);
}))

//update a beach listing
router.put(
    '/:id',
    
)

//create a beach
// router.post(
//     "/beaches",
//     //beach validation needed?
//     asyncHandler(async(req, res, next) => {

//     })
// )
