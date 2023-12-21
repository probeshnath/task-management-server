const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hi route home")
})

app.listen(port, () =>{
    console.log(`localhost connect on ${port}`)
})