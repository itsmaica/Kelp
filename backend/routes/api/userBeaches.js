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
router.get(
    "/:id/beaches/:beachId",
    asyncHandler(async(req, res) => {
        const { beachId } = req.params;
        const oneUserBeach = await Beach.findByPk( beachId );
        console.log("--get one user beaches route hits!!--")
        return res.json(oneUserBeach);
    })
)

router.delete(
    "/:id/beaches/:beachId",
    asyncHandler(async(req, res, next) => {
        const { beachId } = req.params;
        // const userId = req.params.id
        console.log("Hello from delete userBeaches route --> ROUTE HITS")
        // res.send("Delete a beach");
        const deleteThisUsersBeach = await Beach.findByPk(beachId)
        await deleteThisUsersBeach.destroy();
        res.json("Beach destroy!", deleteThisUsersBeach.id)
    })
)

module.exports = router;
