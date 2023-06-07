const express = require("express");
const User = require("../models/user");

const router = express.Router();

// CREATE
router.post('/user', async (req, res) => {
    const user = User(req.body);
    await user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET ALL
router.get('/user', async (req, res) => {
    await User
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET BY ID
router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    await User
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// UPDATE
router.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, password, tipo } = req.body;
    await User
        .updateOne({ _id: id }, { $set: { nombre, apellido, email, password, tipo } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// DELETE
router.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    await User
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;