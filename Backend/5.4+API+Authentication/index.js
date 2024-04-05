import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth. DONE
const yourUsername = "abhi";
const yourPassword = "22";
const yourAPIKey = "16467ca5-611d-4256-ade8-a53f17de2628";
const yourBearerToken = "c31cfdb7-94bb-48ae-a0dc-c16ee26d063b";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string. DONE
  const apiUrl = 'https://secrets-api.appbrewery.com/random';
  axios.get(apiUrl)
  .then(response => {
    // Handle successful response
    // console.log('Random data:', response.data);
    const data=JSON.stringify(response.data)
    res.render("index.ejs",{content:data})
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching random data:', error);
  });
});

app.get("/basicAuth", (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2 DONE
  //HINT: This is how you can use axios to do basic auth: DONE
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
    const apiUrl = 'https://secrets-api.appbrewery.com/all?page=2';
    axios.get(apiUrl, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    }).then(response => {
      // Handle successful response
      // console.log('Random data:', response.data);
      const data=JSON.stringify(response.data)
      res.render("index.ejs",{content:data})
    });
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request. DONE
  const apiUrl = `https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`;
  axios.get(apiUrl)
  .then(response => {
    // Handle successful response
    // console.log('Random data:', response.data);
    const data=JSON.stringify(response.data)
    res.render("index.ejs",{content:data})
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching random data:', error);
  });
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402 DONE
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  const apiUrl = `https://secrets-api.appbrewery.com/secrets/42`;
  axios.get(apiUrl, {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  })
  .then(response => {
    // Handle successful response
    // console.log('Random data:', response.data);
    const data=JSON.stringify(response.data)
    res.render("index.ejs",{content:data})
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching random data:', error);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
