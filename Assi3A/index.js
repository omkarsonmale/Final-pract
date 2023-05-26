const express =require("express");
const app= express()
app.get("/",(req,res)=>{
    //console.log("hello from root side server is running"); this runs in terminal
    console.log(__dirname);
    res.sendFile(__dirname+"/index.html")
})

app.listen(5001,()=>{
    console.log("server is running on port 5001");
})