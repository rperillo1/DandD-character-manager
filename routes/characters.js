const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');

router.get('/', charactersCtrl.index);
router.post('/', charactersCtrl.create);
router.put('/:id/spells', charactersCtrl.addSpell);


// function checkAuth(req, res, next) {
//     if(req.user) return next();
//     return res.status(501).json({msg: 'Not Authorized'});
// }

module.exports = router;