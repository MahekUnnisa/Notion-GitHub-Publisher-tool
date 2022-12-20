
const express = require('express')
const app = express()
const path = require('path');
const PORT = 3000
//server
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`App is listening on port ${PORT}`)
    else 
        console.log("Error occurred, server can't start", error);
    })
//static files
app.use('/static', express.static('static'))

//route
app.get('/', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, 'routes/home.html'));
});

