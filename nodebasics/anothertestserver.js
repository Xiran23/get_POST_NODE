const { create } = require('domain');
const http = require('http'); 


const server = http.createServer((req,res)=>{
    console.log("requset is made ");
})

server.listen(4000,()=>
{
    console.log("on port 4000");
})