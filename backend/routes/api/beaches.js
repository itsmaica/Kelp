const express = require('express');
const asyncHandler = require('express-async-handler')

//not sure if needed yet
const { setTokenCookie, restoreUser } = require('../../utils/auth');

//models
const { Beach } = require('../../db/models')

//validations
const beachValidation = require('../../validations/beachesValidations')


const router = express.Router();

//get beaches
router.get(
    "/",
    asyncHandler(async (_req, res) => {
    const beaches = await Beach.findAll()
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
    asyncHandler(async(_req, res, next) => {
        // console.log("reached the beach route!")
    })
)

module.exports = router;
