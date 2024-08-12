// HINTS:
// 1. Import express and axios DONE

import express from "express" 
import axios from "axios"
import bodyParser from "body-parser";

// 2. Create an express app and set the port number. DONE

const app = express();
const port = 3000;

// 3. Use the public folder for static files. DONE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 4. When the user goes to the home page it should render the index.ejs file. DONE

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret. DONE

const API_URL = "https://secrets-api.appbrewery.com";

app.get("/",async(req,res)=>{
    try{
    const result = await axios.get(API_URL + "/random" );
        console.log((result.data))
        res.render("index.ejs", { secret: result.data.secret , user: result.data.username });
    }
       catch (error) {
        const errorMessage = error.response && error.response.data ? error.response.data : "Unknown error";
        res.render('index.ejs', { secret: JSON.stringify(errorMessage), user: "none" });  
      }
})

// 6. Listen on your predefined port and start the server. DONE

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
