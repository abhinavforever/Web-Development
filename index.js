import fs from 'fs';
import express from "express"
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname }   from 'path';
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(__dirname)

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views/js')));
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

app.post('/save-blog', (req, res) => {
  const { title, content, author } = req.body;
  const filename = `${title}${author}.txt`;

  fs.writeFile(`database/${filename}`, content, (err) => {
      if (err) {
          console.error('Error writing to file:', err);
          res.status(500).send('Error writing to file');
      } else {
          console.log('File has been written successfully.');
          res.sendStatus(200);
      }
  });
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);   
  });

//   --------------------------

