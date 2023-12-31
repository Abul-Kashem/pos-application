const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();


// Get all category

router.get("/get-all", async (req, res) => {

    try {

        const categories = await Category.find();
        res.status(200).json(categories);

    } catch (error) {

        console.log(error);

    }
});

// Create
router.post("/add-category", async (req, res) => {
    try {

        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json("Item added successfully.");

    } catch (error) {

        res.status(400).json(error);

    }
});

// Update
// router.put("/update-category", async (req, res) => {
//     try {
//         await Category.findOneAndUpdate({ _id: req.body._id }, req.body);
//         res.status(200).json("Item updated successfully.");
//     } catch (error) {
//         console.log(error);
//     }
// });
router.put("/update-category", async (req, res) => {
    try {

        await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
        res.status(200).json("Item update successfully.");

    } catch (error) {

        console.log(error);

    }
});



// Delete
router.delete("/delete-category", async (req, res) => {
    try {

        await Category.findOneAndDelete({ _id: req.body.categoryId });
        res.status(200).json("Item deleted successfully.");

    } catch (error) {

    }
})

module.exports = router;