const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    //set header content type
    res.setHeader("Content-Type", "text/html");

    let path = "./views/";

    switch (req.url) {
      case "/":
        path += "index.html";
        res.statusCode = 200;
        break;
      case "/about":
        path += "about.html";
        res.statusCode = 200;
        break;

        case "/about-me":
        // path += "about.html";
        res.statusCode = 301;
        res.setHeader('Location','/about');
        res.end();
        break;

      default:
        path += "404.html";
        res.statusCode = 404;
        break;
    }

    //send an html file
   //  fs.readFile("./views/index.html", (err, data) => {
    
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
      //   res.write(data);
        // or we can
        // res.end();
        res.end(data);
      }
    });

    console.log("this is reqs");
  })
  .listen(4000, () => {
    console.log("Server is working in port 4000");
  });


//   Also work on
// - Port 4200 in already in use
// - Web server failed to start port 8080
// - Cannot access port 3000

// Command 1:
// netstat -ano | findstr :5000

// Command 2:
// taskkill /F /PID {process number}
// or
// taskkill /PID {process number} /F
