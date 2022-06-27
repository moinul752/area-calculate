const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
//user body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/index.html");

});

//creating differnt route
app.get('/circle',(req, res)=>{
    res.sendFile(__dirname +"/circle.html");

});
//get post on circle method 
app.post('/circle',(req, res)=>{
    const radius = req.body.radius;
    const area = Math.PI *radius *radius;
    res.send(`<h1>Area of Circle is ${area}</h1>`);    
});

//triangle route
app.get('/triangle',(req, res)=>{
    res.sendFile(__dirname + "/triangle.html");
});
//get post on triangle method 
app.post('/triangle',(req, res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 *height*base;
    res.send(`<h1>Area of Triangle is ${area}`);
    
});

//app listen port
app.listen(PORT,(req,res)=>{
    console.log(`server running on port https://localhost:${PORT}`);
});