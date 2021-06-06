const express = require('express');

const app = express();

//console.log(data)

//static file

app.use('/static', express.static('public'));

app.get('/', function(req, res){
    
    res.sendFile(__dirname + '/index.html');
})
app.listen(3000, function(){
    console.log("Server is running at port 3000")
})

