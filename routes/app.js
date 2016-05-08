var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render('index');
});

/*
router.get('/', function(req, res, next) {
    //res.render('node', {name: req.params.name ? req.params.name : ''});

    var email = '';
    User.findOne({}, function(err, doc) {
        if (err) {
            return res.send('Error');
        }
        if (doc) {
            email = doc.email;
        }
        res.render('node', {email: email});
    });

});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'John',
        lastName: 'Smith',
        password: 'secret',
        email: email
    });
    user.save();

    //res.redirect('/' + emai);
    res.redirect('/');
})
*/

module.exports = router;
