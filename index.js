const fs = require('fs');
const pdf = require('pdf-parse');
 
function PDF(path){
let dataBuffer = fs.readFileSync(path);
let x = pdf(dataBuffer).then(function(data) {
 return {
  filename: path.replace('.pdf',''),
  numpages: data.numpages,
  numrender: data.numrender,
  info: data.info,
  metadata: data.metadata,
  version: data.version,
  text: data.text
 }  
});
return x;
}

module.exports = PDF