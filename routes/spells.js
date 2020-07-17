const router = require('express').Router();
const spellsCtrl = require('../controllers/spells');

// router.get('/:id/spells', spellsCtrl.index);
router.put('/:id/spells', spellsCtrl.addSpell);



// function checkAuth(req, res, next) {
//     if(req.user) return next();
//     return res.status(501).json({msg: 'Not Authorized'});
// }

module.exports = router;