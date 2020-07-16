const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String
    },
    class: {
        type: String
    },
    level: {
        type: Number
    },
    race: {
        type: String
    },
    alignment: {
        type: String
    },
    maxHitPoints: {
        type: Number
    },
    hitPoints: {
        type: Number
    },
    tempHitPoints: {
        type: Number
    },
    ac: {
        type: Number
    },
    speed: {
        type: Number
    },
    spellCastingAbility: {
        type: Number
    },
    spellSaveDC: {
        type: Number
    },
    spellAtkBonus: {
        type: Number
    },
    profBonus: {
        type: Number
    },
    stats: {
        str: Number,
        dex: Number,
        con: Number,
        int: Number,
        wis: Number,
        char: Number
    },
    savingThrows: {
        type: Array
    },
    equipment: {
        type: String
    },
    money: {
        CP: Number,
        SP: Number,
        EP: Number,
        GP: Number,
        PP: Number
    },
    backstory: {
        type: String
    },
    // spells: [{ reference to spells model}],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

},
    { timestamps: true }
)


module.exports = mongoose.model('Character', characterSchema)