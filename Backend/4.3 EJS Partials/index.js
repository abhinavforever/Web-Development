import express from "express";

const app = express();
const port = 3000;

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

// NOTE : 
// In Express.js, app.use(express.static("public")); is a middleware function that serves static files from the specified directory. In this case, it is set to serve files from the "public" directory.

// When a user makes a request for a static file (like an HTML, CSS, image, or JavaScript file), Express will look in the "public" directory and, if the file exists, serve it to the client. This is commonly used to serve static assets like stylesheets, images, and client-side JavaScript files.

app.use(express.static("public"));

// note : when we write res.render to render some ejs file , the browser automatically searches for the files in 'views' folder . so we just need to write the name of the ejs file that we are trying to render in the views/ folder
// i.e. index.ejs , about.ejs and contact.ejs 

app.get("/",(req,res)=>{
  res.render("index.ejs")
})

app.get("/about",(req,res)=>{
  res.render("about.ejs")
})

app.get("/contact",(req,res)=>{
  res.render("contact.ejs")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
