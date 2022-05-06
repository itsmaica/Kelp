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
        console.log(" userBeaches ",userBeaches)
        return res.json(userBeaches)
    })
)

//get one of the users beaches
// router.get(
//     "/:id/beaches/:beachId",
//     asyncHandler(async(req, res) => {
//         const { beachId } = req.params;
//         const oneUserBeach = await Beach.findByPk( beachId );
//         console.log("--get one user beaches route hits!!--")
//         return res.json(oneUserBeach);
//     })
// )

// MIGHT NEED AN IF STATEMENT
router.delete(
    "/:id/beaches/:beachId",
    asyncHandler(async(req, res) => {
        const beachId = req.params.beachId;
        console.log("Hello from delete userBeaches route --> ROUTE HITS")
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
