const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellSchema = new Schema({
    name: String,
    castingTime: String,
    range: String,
    duration: String,
    description: String,
    atHigherLevels: String,
    classes: String,
    components: String
})

module.exports = mongoose.model('Spell', spellSchema)