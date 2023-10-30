// https://www.youtube.com/results?search_query=duplex+stream+in+node+js
// Node Js Streams (Duplex Stream) | Transfer live data from source to destination with some delay
const fs = require('fs'); 



const  readstream = fs.createReadStream('./assets/text.txt');
// console.log("----new chunck-----");
readstream.on('data',(chunk)=>{
    console.log("----new chunck-----");
    
    console.log(chunk);
    console.log(chunk.toString());
});


//when we write  {encoding:'utf8'} we no longer need to write .tostring()   
const  readstreams = fs.createReadStream('./assets/text.txt',{encoding:'utf8'});
// console.log("----new chunck-----");
readstreams.on('data',(chunk)=>{
    console.log("----new chunck-----");
    
    console.log(chunk);
    // console.log(chunk.toString());
});
//pipping 


// - when there is large number of file to read 

// streams 
// -start using data, before it has finished loading 

// pool ---------------------◄◄--------------- Bash 

// Browser ---------------------◄◄--------------- Data  

// // we can wait until all data are fetch at once(that takes a longer time ) or 

// or we can take 
// // pass a bit at a time (through stream)

//  a small chuck  of data (package of buffer )

//  large data 
// every time buffers fills a data is send 
// example yt

// data fills in buffer then send it(white line in youtube)

//  a bit of data is send to 
//  browese so we can start watching youtube without having to wait to load
//  whole video to load 


// ..^@@@@@@@@@@@@&^....................................................................:^^^^^^^^^^^^.
// ...^@@@@@@@@@@@@@~......................:.................................^7^~!!~:....^777777777777:
// ...^@@@@@@@@@@@@@~..................^~~~~~~~~~~~~:....:~~~~~~~~~~~~^....~~!7!!!!!~~^^.:777777777777:
// ...^@@&&@@@@&&@@@~.:::::::::::::::::J??????????7J!:7J:7J7??????????Y:::^Y777777!7!?:!^^777JJJJJ?777:
// ...^@@&@@@&@&&@@@~.:::::::::::::::::Y?7777777777J7:JP:7J7777777777?Y:::^Y777777!7!7:!~^777JJJJJ?777:
// ...^@@@@@@@@@@@@@^..................^~~~~~~~~~~~~:....:~~~~~~~~~~~~^....~~~~~~~^^^~^^.:7!!!!!!!!!!!:
// ...^&@@@@@@@@@@@&^....................................................................:!!!!!!!!!!!!.
// ...:777777777777!.....................................................................:~~~~^.....:~.



