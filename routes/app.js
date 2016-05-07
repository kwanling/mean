var express = require('express');
var router = express.Router();

router.get('/:name?', function(req, res, next) {
    res.render('node', {name: req.params.name ? req.params.name : ''});
});


router.post('/', function(req, res, next) {
    var name = req.body.name;

    res.redirect('/' + name);
})

module.exports = router;
