import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let count=0;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{heading:"Type your name here"})
});

app.post("/submit", (req, res) => {
  count=0;
  for (let i = 0; i < req.body.fName.length; i++) {
    const charCode = req.body.fName.charCodeAt(i);

    // Check if the character is a letter (uppercase or lowercase)
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      count++;
    }
  }
  for (let i = 0; i < req.body.lName.length; i++) {
    const charCode = req.body.lName.charCodeAt(i);

    // Check if the character is a letter (uppercase or lowercase)
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      count++;
    }
  }

  if(count==0){
    res.render("index.ejs",{heading:"Please enter your name first"})
  }
  else{
    res.render("index.ejs",{heading:`There are ${count} letters in your name`})
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
