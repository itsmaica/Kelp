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
    // console.log("Hello------from getAllBeachs")
    // console.log("from the get route --> HELLO?!?", beaches)
    return res.json(beaches);
}))

//get one beach - Route works, but thunk does not
router.get(
    "/:beachId",
    asyncHandler(async(req, res) => {
        // console.log("Testing route")
        const { beachId } = req.params;
        // console.log( "This is beachId", beachId )
        const oneBeach = await Beach.findByPk( beachId );
        // res.send("Getting the single beach")
        // console.log("This is beach from find by pk", beach)
        console.log("The route hit!!!!!!!!!")
        return res.json(oneBeach)
    })
)

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
    "/new",
    asyncHandler(async(req, res, next) => {
        // console.log("beach from route fetch - does this route hit?")
        const beach = await Beach.create({
            name: req.body.name,
            userId: req.body.userId,
            category: req.body.category,
            description: req.body.description,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zipcode
        })
        return res.json(beach);
    })
)

// delete a beach

router.delete(
    "/:beachId",
    asyncHandler(async(req,res,next) => {
        const { beachId } = req.params
        const deleteThisBeach = await Beach.findByPk(beachId)
        return deleteThisBeach.destroy()
    })
)

module.exports = router;
