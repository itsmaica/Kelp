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

//get All the reviews for ONE beach
router.get(
    "/:beachId",
    asyncHandler(async(req,res) => {
        // console.log("REVIES FOR ONE BEACH GET ROUTE----->")
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

//delete a review
router.delete(
    "/:id",
    asyncHandler(async(req,res) => {
        const id = req.params.id;
        console.log("what is req.params", id)
        console.log("-------greetings from delete REVIEW Route-----")
        const review = await Review.findByPk(id)
        // console.log("Delete this review", deleteThisReview)
        await Review.destroy ({
            where: {id}
        })
        return res.json(review);
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
