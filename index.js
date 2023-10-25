const express =require("express");
const app=express();
const bp=require("body-parser")
app.use(bp.urlencoded({extended:true}))
const http=require("https");
const { log } = require("console");

app.get("/",function(req,res){
    res.sendFile(__dirname+"/app.html");
});

app.post("/",function(req,res){
    var lat=parseFloat(req.body.lat);
    var lon=parseFloat(req.body.lon);
    var li="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=458d9d3ab760af5d6c502fb3e6fa491f"
    http.get(li,function(response){
        response.on("data",function(data){
            var wedata=JSON.parse(data);
            res.write("the temp at lan and long is"+wedata.main.temp);
            res.send();
        });


    });

    
    });

app.listen(3001,function(){
    console.log("server started ");
});

