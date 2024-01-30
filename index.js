import fs from 'fs'
function submitBlog(){
    const t=document.querySelector("#title").value
    const c=document.querySelector("#content").value
    const a=document.querySelector("#author").value
    const filename = `${t}${a}.txt`
    fs.writeFile(`database/${filename}`, c, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('File has been written successfully.');
        }
      })
 }
import express from "express"
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname }   from 'path';
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
app.get('/', (req, res) => {
    res.render('index.ejs');
});
// const absolutePath = path.join(__dirname, 'public','about','index.html');
app.get('/about',(req,res)=>{
    res.sendFile("about/index.html" )
})
app.get('/contact',(req,res)=>{
    res.sendFile("contact/index.html")
})
app.get('/music',(req,res)=>{
    res.sendFile('music/index.html')
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);   
  });

//   --------------------------

