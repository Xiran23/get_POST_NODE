const http = require('http'); 

const server = http.createServer((req,res)=>{
    // res.write("server is up and runningg ");

    // res.end();
    // console.log("request made");
    // console.log(req.url); /home /about / 
    // console.log(req.method);

    // console.log("response made");
    //set header content type 
    // res.setHeader('Content-type','text/plain');

    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylesheet" href="#"</head>');
    res.write("<h1>for text/html </h1>");
    res.write("hello,chiran");
    res.end('This is a plain text response.');
    // res.end();




});


server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
})