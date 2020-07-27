const Character = require('../models/character');

module.exports = {
    index,
    create: createCharacter,
    addSpell: addSpellToCharacter,
    delete: deleteCharacter,
    update: updateCharacter,
    deleteSpell,
    getOne
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


async function getOne(req, res) {
    try {   
        const character = await Character.findById(req.params.id);
        res.status(200).json(character);
    }
    catch (err) {
        res.status(500).json(err);
    }
}


// create
async function createCharacter(req, res) {
    req.body.user = req.user._id
    try {
        const character = await Character.create(req.body);
        res.status(201).json(character)
    }
    catch (err) {
        res.status(500).json(err);
    }
} 

// delete
async function deleteCharacter(req, res) {
    try {
        const character = await Character.findByIdAndDelete(req.params.id);
        res.status(200).json(character);
    }
    catch(err) {
        res.status(500).json(err);
    }
}

// grab spell from D&D api
async function addSpellToCharacter(req, res) {
    try{
        const character = await Character.findById(req.params.id);
        character.spells.push(req.body)
        character.save()
        res.status(200).json(character);
    }
    catch(err){
        res.status(500).json(err);
    }
}


// update character 
async function updateCharacter(req, res) {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedCharacter);
    }
    catch(err) {
        res.status(500).json(err);
    }
}

// delete a spell
async function deleteSpell(req, res) {
    try {
        const character = await Character.update({_id: req.params.id}, {$pull: {spells: {_id: req.params.spellId}}})
        res.status(200).json(character);
    }
    catch(err) {
        res.status(500).json(err);
    }
}
