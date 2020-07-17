const Character = require('../models/character');

module.exports = {
    index,
    addSpell
};

async function index(req, res) {
    try {
        const character = await Character.find(req.params.id).populate('spells');
        res.status(200).json(character);
    }
    catch (err) {
        res.status(500).json(err);
    }
}


async function addSpell(req, res) {
    try{
        const character = await Character.findById(req.params.id);
        console.log(req.body)
        character.spells = req.body.spells
        console.log(character)
        res.status(200).json(character);
    }
    catch(err){
        res.status(500).json(err);
    }
}