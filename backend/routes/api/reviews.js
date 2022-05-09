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
        const beachId = req.params.beachId
        const reviews = await Review.findAll({
            where: {
                beachId: {
                    [Op.eq]: beachId
                }
            }
        })
        return res.json(reviews)
    })
)

//delete a review
router.delete(
    "/:id",
    asyncHandler(async(req,res) => {
        const id = req.params.id;
        const review = await Review.findByPk(id)
        await Review.destroy ({
            where: {id}
        })
        return res.json(review);
    })
)


module.exports = router;
