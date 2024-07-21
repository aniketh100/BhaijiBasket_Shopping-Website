var mongoose = require("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/db.js")

var uSchema = new mongoose.Schema({
    name : String;
    password : String;
    email : String;
    number : int;
});

var userModel = mongoose.model('users',uSchema);
module.exports = mongoose.model('users',userModel);
