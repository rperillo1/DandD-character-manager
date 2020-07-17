const Character = require('../models/character');

module.exports = {
    index,
    create,
};

// index
async function index(req, res) {
    try {
        const characters = await Character.find({ user: req.user._id }).populate('user');
        res.status(200).json(characters);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

async function create(req, res) {
    req.body.user = req.user._id
    try {
        const character = await Character.create(req.body);
        res.status(201).json(character)
    }
    catch (err) {
        res.status(500).json(err);
    }
} 

// async function show(req, res) {
//     try {
//         const character = await Character.findById(req.params.id);
//         res.status(200).json(character);
//     }
//     catch(err) {
//         res.status(500).json(err);
//     }
// }
