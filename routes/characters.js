const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');

router.get('/', checkAuth, charactersCtrl.index);
router.get('/:id', checkAuth, charactersCtrl.getOne);

router.post('/', checkAuth, charactersCtrl.create);
router.put('/:id/spells', checkAuth, charactersCtrl.addSpell);
router.put('/:id', checkAuth, charactersCtrl.update);
router.delete('/:id', checkAuth, charactersCtrl.delete);
router.delete('/:id/spells/:spellId', checkAuth, charactersCtrl.deleteSpell);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(501).json({ msg: 'Not Authorized' });
}

module.exports = router;

