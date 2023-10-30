const fs = require('fs'); 
// console.log(fs);

//  // readfile

fs.readFile('./documents/doc.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

//writefile
//if file doesnot exist it will create one 
fs.writeFile('./documents/doc1.txt','this is edited for writefile',()=>{
    console.log('file was written');
})

//directories

//it create folder name assets 
// it does allow to create create file with same name so it reurns and error 
fs.mkdir('./assets',(err)=>{
    if (err){
        console.log(err)
    }
    console.log("Folder is created");
})

//to remove dir 
//fs.rmdir("./assets",(err)=>{
    // if(err){

        // console.log(err)
        // }
        // else{
        // console.log("dir removed")
        
        // }
    // }
// })

if(fs.existsSync('./assets')){
    //it will check if file exist and its async function
}

//deletfiles
fs.unlink('./documents/deletedfile.txt',(err)=>{
    if(err){
        console.log(err); 

    }
    console.log("file deleted")
    
})