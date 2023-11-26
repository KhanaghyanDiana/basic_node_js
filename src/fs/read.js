import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
import path from "node:path";
import fs from "fs.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pathToFiles  = path.join(__dirname, "files")

const read = async () => {
    // Write your code here
    fs.readdir(pathToFiles,(err, fileNames) =>{
        let readableFilePath  = path.join(pathToFiles, fileNames[2])
       if(fs.existsSync(readableFilePath)){
           throw  new Error("FS operation failed")
       }
        let readableStream  = fs.createReadStream(readableFilePath, {
            encoding:'utf-8'
        })
        readableStream.on("data", (chunk)=>{
            console.log(chunk)
        })
    })
};

await read();