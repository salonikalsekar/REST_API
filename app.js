const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const feedRoutes = require('./routes/feed');

// app.use(bodyParser.urlencoded()); for form type data
app.use(bodyParser.json());

//setting cors
app.use((eq, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization', );
    next();
});

app.use('/feed', feedRoutes);

app.listen(3000);




/// requests from UI ////

// const getButton = document.getElementById('get')
// const addButton = document.getElementById('add')

// getButton.addEventListener('click', () =>{
//   fetch('http://localhost:3000/feed/posts').then(res => res.json()).then(resData => console.log(resData)).catch(err => console.log(err));
// })

// addButton.addEventListener('click', () =>{
//   fetch('http://localhost:3000/feed/post', {
// method: 'POST', 
// body: JSON.stringify({ title: "haha"})
// ,headers: {
//         'Content-Type' : 'application/json'
//     }}).then(res => res.json()).then(resData => console.log(resData)).catch(err => console.log(err));
// })

