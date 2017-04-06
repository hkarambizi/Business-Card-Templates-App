var express = require('express');
router = express.Router();

var cardSeeds = [
    {
        _id: 221421412442,
        cardName: 'Harold',
        cardAddress: '654 Euranus Way'
    },
    {
        _id: 231431414114,
        cardName: 'Randall',
        cardAddress: 'P.O. Box 696969'
    },
    {
        _id: 243532541353,
        cardName: 'Chuck Ryan',
        cardAddress: 'Soi 87 Phuket'
    }

];

router.get('/', function(req, res) {
    res.json({cards: cardSeeds});
});

module.exports = router;