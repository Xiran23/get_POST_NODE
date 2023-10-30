const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const Blog = require("./models/blog");
const { result } = require("lodash");
const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// connect to mongodb & listen for requests
const dbUR = "mongodb://localhost:27017";
mongoose
  .connect("mongodb://127.0.0.1:27017/node-tuts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE Connected");
    app.listen(5000, () => {
      console.log("this port working");
    });
  })
  .catch((e) => console.log(e));
// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
//takes url encoded data and pass into object
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
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

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("5ea99b49b8531f40c0fde689")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// blog routes
app.use("/blogs", blogRoutes);
// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
