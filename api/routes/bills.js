const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router();


// Get all bill

router.get("/get-all", async (req, res) => {

    try {

        const bills = await Bill.find();
        res.status(200).json(bills);

    } catch (error) {

        console.log(error);

    }
});

// Create
router.post("/add-bill", async (req, res) => {
    try {

        const newBill = new Bill(req.body);
        await newBill.save();
        res.status(200).json("Item added successfully.");

    } catch (error) {

        res.status(400).json(error);

    }
});

// Update
router.put("/update-bill", async (req, res) => {
    try {

        await Bill.findOneAndUpdate({ _id: req.body.billId }, req.body);
        res.status(200).json("Item update successfully.");

    } catch (error) {

        console.log(error);

    }
});



// Delete
router.delete("/delete-bill", async (req, res) => {
    try {

        await Bill.findOneAndDelete({ _id: req.body.billId });
        res.status(200).json("Item deleted successfully.");

    } catch (error) {

    }
})

module.exports = router;