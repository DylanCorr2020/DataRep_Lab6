
//setting up express
//how to create an api that sends text back
const express = require('express')
const app = express()
const port = 3000

//get express to determine what package its in
const path = require('path');

const bodyParser = require("body-parser");


//we can now parse the body of http request
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());

//listening to http get request

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

//first part is the url your listening to
app.get('/api/movies',(req,res)=>{

const mymovies = [
{
   "Title": "Avengers: Infinity War",
   "Year": "2018",
   "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
},
{
    "Title": "Captain America: Civil War",
     "Year": "2016",
     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
}
];
    //send data back
    //create an object called movies
    //and contains data from mymovies
    //json list
    //data being sent from  server to client
    res.json({movies:mymovies});
});

//listenig to url localhost300/hello
//send back hello
//req is http request
//res is http response

app.get('/hello/:name',(req, res) => {
   console.log(req.params.name);
   res.send('Hello' + req.params.name);
});





//listening for a get request and return a html page 
app.get('/test',(req,res)=>{
    //dertemine what directory were in
    res.sendFile(__dirname + '/index.html');
})



app.get('/name',(req,res) =>{
//send first name and last back to the user
  res.send('Hello' + req.query.fname + ' ' +  req.query.lname);
});


//when you use post you are sending up the body
//so we need to import a package to do this 
//body Parser
//able to hide details in  the url
app.post('/name',(req,res)=>{
    res.send('Hello' + req.body.fname + ' ' + req.body.lname);
});


//setting up our web server

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//it will listen at local host 3000
//and return back hello world