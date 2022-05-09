const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const asyncHandler = require('express-async-handler')
const { response } = require('express');
const csrfProctection = csrf({ cookie: true })

const { Beach, Review } = require('../../db/models')

//get beaches
router.get(
    "/",
    asyncHandler(async (req, res) => {
    const beaches = await Beach.findAll()
    return res.json(beaches);
}))

//get one beach - Route works, but thunk does not
router.get(
    "/:beachId",
    asyncHandler(async(req, res) => {
        const { beachId } = req.params;
        const oneBeach = await Beach.findByPk(beachId, {
            include: Review
        });
        return res.json(oneBeach)
    })
)


//create a beach
router.post(
    "/new",
    asyncHandler(async(req, res, next) => {
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
    asyncHandler(async(req,res) => {
        const { beachId } = req.params
        const deleteThisBeach = await Beach.findByPk(beachId)
        return deleteThisBeach.destroy()
    })
)

// write a review for a beach
router.post(
    "/:beachId/reviews/new",
    asyncHandler(async(req,res) => {
        const { beachId } = req.params
        const review = await Review.create({
            name: req.body.name,
            answer: req.body.name,
            userId: req.body.userId,
            beachId: req.body.beachId,
            rating: req.body.rating,
            answer: req.body.answer
        })
        return res.json(review);
    })
)

//edit a beach
router.put(
    "/:id",
    asyncHandler(async(req,res) => {
        const id = req.params.id
        const newName = req.body.name
        const newCategory = req.body.category
        const newDescription = req.body.description
        const newAddress = req.body.address
        const newCity = req.body.city
        const newState = req.body.state
        const newZip_code = req.body.zip_code
        const userId = req.body.userId

        const beach = await Beach.findByPk(id)

        const { name, category, description, address, city, state, zip_code } = beach

        if (name !== newName) {
            beach.name = newName
            await beach.save();
         }
         if (category !== newCategory) {
            beach.category = newCategory
            await beach.save();
         }
         if (description !== newDescription) {
            beach.description = newDescription
            await beach.save();
         }
         if (address !== newAddress) {
            beach.address = newAddress
            await beach.save();
         }
         if (city !== newCity) {
            beach.city = newCity
            await beach.save();
         }
         if (state !== newState) {
            beach.state = newState
            await beach.save();
         }
         if (zip_code !== newZip_code) {
            beach.zip_code = newZip_code
            await beach.save();
         }

        const updatedBeach = await Beach.findByPk(id)

        return res.json(updatedBeach)
    })
)


module.exports = router;
