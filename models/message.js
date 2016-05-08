var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('user');

var schema = new Schema({
    context: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports =  mongoose.model('Message', schema);

