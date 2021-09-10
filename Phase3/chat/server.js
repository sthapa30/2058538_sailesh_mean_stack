let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require('socket.io')(http);
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=>{
    console.log("Client Connected");
    socket.on("obj",(msg)=>{
        console.log(msg);
    })

    //socket.emit("obj1","Hello Client");
    r1.on("line",(input)=> {
        socket.emit("obj1",`Server: ${input}`);
    });
})

http.listen(9090,()=>console.log("Server running on port number 9090"));