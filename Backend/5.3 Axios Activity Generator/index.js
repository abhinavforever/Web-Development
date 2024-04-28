import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    // console.log(result);
    res.render("index.ejs", { e:false, goPressed:false , data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { e:true,goPressed:false,
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
        // console.log(req.body);
        const params = {
          type: req.body.type, // Type of quiz questions
          participants: req.body.participants, // Number of participants for the quiz
        };
        // console.log(params.type, params.participants)

        // Define the URL of the API endpoint
        // const apiUrl = `https://bored-api.appbrewery.com/filter?type=${params.type}&participants=${params.participants}`
        // console.log(apiUrl);

        const apiUrl = 'https://bored-api.appbrewery.com/filter'

        axios.get(apiUrl, { params })
          .then(response => {
            // Handle successful response
            const rand=Math.floor(Math.random()*response.data.length)
            // console.log('Response data:', response.data[rand]);
            res.render("index.ejs",{e:false , goPressed:true ,data_post :response.data[rand]})
          })
          .catch(error => {
            // Handle error
            // console.error('Error occurred:', error);
            res.render("index.ejs",{e:true ,goPressed:true , error:"No activities that match your criteria."})
          });

      // Step 2: Play around with the drop downs and see what gets logged.
      // Use axios to make an API request to the /filter endpoint. Making
      // sure you're passing both the type and participants queries.
      // Render the index.ejs file with a single *random* activity that comes back
      // from the API request.
      // done above

      // Step 3: If you get a 404 error (resource not found) from the API request.
      // Pass an error to the index.ejs to tell the user:
      // "No activities that match your criteria."
      // done above in .catch error
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
