var express = require("express");
var app = express();
var path = require("path")
var router = express.Router();
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
app.use('/', express.static(path.join(__dirname, '')));

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect("mongodb://localhost:27017/bb", { useNewUrlParser: true });

var collection = db.collection('details')

app.use("/",express.static(path.join(__dirname,"")));

app.get('/', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/BhaijiBasket_home.html");
});,

app.get('/login', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/BhaijiBasket_login.html");
});

app.get('/signup', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/BhaijiBasket_signup.html");
});

app.get('/cart', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/BhaijiBasket_cart.html");
});

app.get('/category', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/BhaijiBasket_Category.html");
});

app.get('/about', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/BhaijiBasket_About.html");
});

app.get('/category/dairy', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/ind_dairy.html");
});

app.get('/category/millet', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/ind_millet.html");
});

app.get('/category/meat', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/ind_meat.html");
});

app.get('/category/snacks', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/ind_snacks.html");
});

app.get('/category/fruits', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/ind_fruits.html");
});

app.get('/category/cond', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/ind_cond.html");
});

app.get('/bill', function(req,res){
    res.sendFile("C:/Users/Aniketh/PycharmProjects/programfolder2/BB/bill.html");
});

app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;

   var data = {
      "name": name,
      "email":email,
      "password":pass,
      "phone":phone
   }
   collection.insertOne(data,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
      //res.redirect('http://localhost:8888')
   });
   return res.redirect('http://localhost:8888/login');
})

app.post('/log_in',function(req,res){
    var email = req.body.e;
    var password = req.body.p;
    collection.findOne({email,password},function(err,user){
        if(!err && user && user.password == password){
            console.log(user);
            //res.redirect('http://localhost:8888')
        }
        else{
            console.log("user not found");
        };
    });
    return res.redirect('http://localhost:8888/login');
});



app.listen(8888);
console.log("Server on port 8888");
