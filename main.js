const fs = require('fs');


if(process.argv.length !==3){
  console.log("Argument error!!");
  process.exit(1);
}
const filePath =  process.argv[2];


function printFileContents(filePath) { 
fs.readFile(filePath,'utf-8', (err,data)=>{
    if(err){
    console.log(`Expected Output: Column ${filePath} not found in the CSV`);
    process.exit(1);
    }

   console.log(data);
})
}


printFileContents(filePath);
