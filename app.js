console.log("Starting Web Server");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MongoDB connecting
const db = require("./server").db(); 
const mongodb = require("mongodb");
             
// 1: Kirish code  
app.use(express.static("public"));              // Middleware Design Pattern
app.use(express.json());                        // Middleware Design Pattern Rest API support
app.use(express.urlencoded({extended: true}));    // Middleware Design Pattern Traditional API support
       
// 2: Session code 

// 3: Views code         
app.set("views", "views");                
app.set("view engine", "ejs");             

// 4: Routing code  
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
    // res.json({ test: "success" }); 
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({state: "success" });
    }) 
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id)}, 
        { $set: {reja: data.new_input}}, 
        function(err, data) {
            res.json({state: "success!"});
        });
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({state: "Hamma rejalar o'chirildi"});
        });
    }
});

app.get('/author', (req, res) => { 
    res.render("author", {user: user});
});

app.get('/', function (req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", { items: data});
        } 
    });
}); 

module.exports = app;


/* API Request
1. Type: traditional, rest, graphQl
2. Method: get/post
3. Structure: header/body
*/

/* Frontend Development: BSSR(Ejs) / SPA(React)
                     backend side-server randering
                     single page app */