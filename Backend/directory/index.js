import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    console.log("home")
    res.send("home")
})

app.get('/contact',(req,res)=>{
    console.log("contact")
    res.send('contact')
})

app.get('/about',(req,res)=>{
    res.send("about")
    console.log("about")
})

app.listen(3000,()=>{
    console.log("server running ")
})