const express = require('express');
const router = express.Router();
const csrf = require('csurf');
//validations? { check, validationResults } = expressValidator for backend
const asyncHandler = require('express-async-handler')
const { response } = require('express');
const csrfProctection = csrf({ cookie: true })

const { Beach, Review, Sequelize } = require('../../db/models');

const Op = Sequelize.Op

//all the reviews
router.get(
    "/",
    asyncHandler(async (req,res) => {
        const reviews = await Review.findAll()
        return res.send(reviews)
    })
)

//get one beach's reviews
router.get(
    "/beaches/:beachId/",
    asyncHandler(async(req,res) => {
        const beachId = req.params.beachId
        const reviews = await Review.findAll({
            where: {
                beachId: {
                    [Op.eq]: beachId
                }
            }
        })
        // console.log(reviews)
        return res.json(reviews)
        // console.log("hey maica")
    })
)

//testing it in beaches route for id 
// router.post(
//     "/new",
//     asyncHandler(async(req,res, next) => {
//         const review = await Review.create({
//             name: req.body.name,
//             answer: req.body.name,
//             userId: req.body.userId,
//             beachId: req.body.beachId,
//             rating: req.body.rating,
//             answer: req.body.answer
//         })
//         return res.json(review);
//     })
// )

module.exports = router;
