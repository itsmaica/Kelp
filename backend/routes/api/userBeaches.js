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
        console.log("hello from get userBeaches route",userId)
        const userBeaches = await User.findByPk(userId, {
            include:[{
                    model: Beach
            }]
        });
        console.log(userBeaches)
        return res.json(userBeaches)
    })
)

module.exports = router;
