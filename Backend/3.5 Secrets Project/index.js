//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

// My solution index.js is correct and solution.js is wrong 
// reason: in solution.js there is a problem. If you have entered the correct password once , then you will always be redirected to secret.html even if the password entered is wrong now(until the server is closed). the logic starts working properly only if server is closed and then restarted again.

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
var enteredPassword;
function checkPassword(res,req,enteredPassword){
    if(req.body.password==="ILoveProgramming"){
        return true;
    }
    else{
        return false;
    }
}

app.post("/check", (req, res) => {
     // Check if the submit button is clicked
        if (req.body.submitButton) {
            enteredPassword = req.body.password;
            if(checkPassword(res,req,enteredPassword)){
                res.sendFile(__dirname + "/public/secret.html")
            }
            else{
                res.sendFile(__dirname + "/public/index.html")
            }
        }
});

app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
