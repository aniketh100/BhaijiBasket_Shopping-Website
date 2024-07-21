var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/bb',{useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected',function(){
    console.log("DB Connected")
});
conn.on('disconnected',function(){
   console.log('DB Disconnected');
});

conn.on('error',console.error.bind(console, 'connection error'))

module.exports = conn;