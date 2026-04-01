const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// ADD TASK
router.post("/", async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title
        });

        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET TASKS
router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

module.exports = router;