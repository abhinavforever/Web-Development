import express from 'express'
const app=express();
const port=3000
// const d = new Date("2024-01-28");
const d=new Date
const day = d.getDay();
app.get("/",(req,res)=>{
    
    if(day!=0 && day!=6){
        res.render("index.ejs",{
        dayType:"a weekday",
        advice:"its time to work hard",

    })}
    else{
        res.render("index.ejs",{
        dayType:"a weekend",
        advice:"its time to have fun",
    })}

    // if(day!=6 && day!=7){
    // res.send(`<h1>Hey , its a weekday , its time to work hard`)}
    // else{
    // res.send(`<h1>Hey , its a weekend , its time to have fun`)}
})

app.listen(port,()=>{
    console.log(`listening on port ${port}` )
})