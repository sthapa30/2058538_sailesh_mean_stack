let fs = require("fs");
let mongoClinet = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

//read file 
var data = JSON.parse(fs.readFileSync("call_data.json").toString()); 
//console.log(data.length);
mongoClinet.connect(url,(err, client)=>{
    if(!err){
        console.log("Conneted to database");
        let db = client.db("tcsmean");
        db.collection("CallLogs").insertMany(data,(err,result)=>{
            if(!err){
                console.log("Record inserted sucessfully");
                console.log(result);
            }else{
                console.log(err);
            }
            client.close();
        })

    }else{
        console.log(err);
    }
})