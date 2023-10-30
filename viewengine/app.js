const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");

const app = express();

//connect to mongo db
const dbUR = "mongodb://localhost:27017";

mongoose
  .connect("mongodb://127.0.0.1:27017", { dbname: "node-tuts" })
  .then(() => {
    console.log("DATABASE Connected");
    app.listen(4000, () => {
      console.log("this port working");
    });
  })
  .catch((e) => console.log(e));

//regiseter a view engine

app.set("view engine", "ejs");

//express auto looks at views (no need to set location)
// app.set('views','myviews');
//listen for request

//for css to be linked(we need this )
// images too
// any thing inside plublic file can use as static in frontend
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

//middle ware and static file
app.use(morgan("dev"));

app.use("/", (req, res, next) => {
  console.log("new request made:");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);
  next();
});

app.use("/", (req, res, next) => {
  console.log("In the next middle ware:");

  next();
});

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Chiran blog",
    snippet: "about my new blog",
    body: "more about my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/add-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("651ec92c94bab85045e208f0")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  //   res.sendFile("./views/index.html", { root: __dirname });//no longer need this for ejs
  // resonse render file inside view name index

  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "All blogs",
        blogs: result,
      });
    });
});

app.get("/about", (req, res) => {
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "about" });
});

app.get("/test/ram", (req, res) => {
  res.render("test", { title: "create" });
  // res.end("hey");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
  res.status(400).render("404", { title: "error" });
});
