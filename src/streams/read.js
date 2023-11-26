import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
import path from "node:path";
import fs from "fs.js";


const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)
const pathToFile = path.join(__dirname, "files" , 'fileToRead.txt')

 const read = async () => {
  // Write your code here
   const readable=   fs.createReadStream(pathToFile)
  readable.on("data", (chunk)=>{
      process.stdout.write(chunk);
  })

};

await read();