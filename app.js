var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//===CONNECT MONGOOSE TO THE SERVER 
mongoose.connect("mongodb://localhost/blog_web_app", { useNewUrlParser: true });


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

//===DEFINE THE DATABASE SCHEMA
var blogSchema = new mongoose.Schema({
    title: String, 
    image: String, 
    body: String, 
    created: {type: Date, default: Date.now}
});

var blogPost = mongoose.model("BlogPost", blogSchema);

// blogPost.create({
//     title: 'How to make cats happy',
//     image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
//     body: "Much like human children, cats will need copious amounts of affection to remain happy and full of personality. An empty home will breed a cat that prefers to be alone. So if you work all day and night, and you don't have family or other pets, you might want to get a fish. Or maybe a pet rock."
// });


//===SETUP THE ROUTES

app.get("/", function(req, res){
    res.send("This is the landing page");
});


//===INDEX ROUTE
app.get("/blogs", function(req, res){
    blogPost.find({}, function(err, posts){
        if(err){
            console.log(err)
        } else {
            res.render("index", {posts : posts});
        }
    });  
});

//===NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

//===CREATE ROUTE
app.post("/blogs", function(req, res){
    var title = req.body.blog.title;
    var image = req.body.blog.image;
    var body = req.body.blog.body;
    blogPost.create({
        title: title,
        image: image,
        body: body
    }, function(err, blogPost){
        if(err){
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

//===SETUP THE š
app.listen("3000", function(){
    console.log("Server is up and running!")
});