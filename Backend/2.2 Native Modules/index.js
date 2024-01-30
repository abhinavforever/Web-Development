const f= require("fs")

f.writeFile("message.txt","hello ji namaste",(err)=>{
    if (err) throw err;
    console.log("data has been saved in the file")
})
f.appendFile("message.txt","\nhello ji namaste",(err)=>{
    if (err) throw err;
    console.log("data has been saved in the file")
})
f.readFile("message.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log(data)
})