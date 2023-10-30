const express = require("express");

const app = express();

//regiseter a view engine

app.set("view engine", "ejs");

//express auto looks at views (no need to set location)
// app.set('views','myviews');
//listen for request

app.listen(5000, () => {
  console.log("this port working");
});

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });

  // res.send('<h1>hey</h1>');
  // res.send('<a href="/home">Home</a>');
  // res.send('<a href="/home">Home</a>');
  //  //no need to set header auto maticaliy sets content type
  // automatically sets status codes
});

app.get("/home", (req, res) => {
  // res.send('<h1>About</h1>');
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(400).sendFile("./views/404.html", { root: __dirname });
});
