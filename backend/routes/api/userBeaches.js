const express = require('express');
const router = express.Router();
const csrf = require('csurf');
//validations? { check, validationResults } = expressValidator for backend
const asyncHandler = require('express-async-handler')
const { response } = require('express');
const csrfProctection = csrf({ cookie: true })

const { Beach, Review, User } = require('../../db/models')

// get all the users beaches
router.get(
    "/:id/beaches",
    asyncHandler(async(req, res) => {
        const userId = req.params.id
        const userBeaches = await User.findByPk(userId, {
            include:[{
                    model: Beach
            }]
        });
        return res.json(userBeaches)
    })
)


// MIGHT NEED AN IF STATEMENT
router.delete(
    "/:id/beaches/:beachId",
    asyncHandler(async(req, res) => {
        const beachId = req.params.beachId;
        const beach = await Beach.findByPk(beachId, {
            include : Review
        })
        await Review.destroy ({
            where: {
                beachId: beachId
            }
        })
        await Beach.destroy({
            where: {
                id: beachId
            }
        });
        //this will be given to thunk - pgk for json
        res.json(beach)
    })
)

module.exports = router;
