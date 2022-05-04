const express = require('express');
const router = express.Router();
const csrf = require('csurf');
//validations? { check, validationResults } = expressValidator for backend
const asyncHandler = require('express-async-handler')
const { response } = require('express');
const csrfProctection = csrf({ cookie: true })

/// boiler above line 6

//models
const { Beach, Review } = require('../../db/models')



//get beaches
router.get(
    "/",
    asyncHandler(async (req, res) => {
    const beaches = await Beach.findAll()
    // console.log("from the get route --> HELLO?!?", beaches)
    return res.json(beaches);
    // res.send("Please work")
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
