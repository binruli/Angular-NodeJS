const express = require('express');//'express' name of the package
const bodyParser = require("body-parser");

const app = express();//create express app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//to only support default features in the url encoding.

//"*" means no matter which domain tha app
//which is sending the request is running on
//it's allowed to access our resources
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Wich, Content-Type, Accept",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS",
  );
  next();
});

//backend endpoint
//output the posts we receive with console log.
app.post('/api/posts', (req, res, next)=>{
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!'
  });
});





//'/api/posts' to reach "res.xx()" this code
//res.send('Hello from express!');//send a response
app.get('/api/posts', (req, res, next)=>{
  const posts = [
    {
      id:"123",
      title: "First post",
      content: "321"
    }

  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts
  });//return data in the json format.
});

module.exports = app;
//showing middleware concept
//app.use((req, res, next)=>{
  //console.log('Fist middleware');
  //next();
//});
