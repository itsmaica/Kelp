const express = require('express');
const asyncHandler = require('express-async-handler')

//not sure if needed yet
const { setTokenCookie, restoreUser } = require('../../utils/auth');

//need to make Beaches table/model
const Beach = require('../../db/models/beach');
const Beaches = require('../../db/models')

//validations
const beachValidation = require('../../validations/beachesValidations')


const router = express.Router();

//get beaches
router.get('/', asyncHandler(async function(_req,res){
    //might need to add more here
    console.log(Beach)
    const beaches = await Beach();
    return res.json(beaches);
}))

//update a beach listing
// router.put(
//     '/:id',
//     beachValidation.validateUpdate,
//     asyncHandler(async function (req,res) {
//         const id = await Beaches.update(req.body);
//         return res.redirect(`${req.baseUrl}/${id}`);
//     })
// );

//create a beach
router.post(
    "/",
    asyncHandler(async(req, res, next) => {
        console.log("reached the beach route!")
    })
)

module.exports = router;
