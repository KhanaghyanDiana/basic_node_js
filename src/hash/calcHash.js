import crypto from "crypto.js";
import fs from "fs.js";
import {fileURLToPath} from "url.js";
import path, {dirname} from "node:path";


const __filename= fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pathFile  = path.join(__dirname , "files" , 'fileToCalculateHashFor.txt')
console.log(pathFile)
const calculateHash = async () => {
    // Write your code here
    const sha256Hash = crypto.createHash('sha256');
    const readableStream = fs.createReadStream(pathFile)
    readableStream.on("data", (chunk)=>{
        sha256Hash.update(chunk)
    })
    readableStream.on('end', ()=>{
     let hexData =    sha256Hash.digest("hex")
        console.log(hexData, "hexData")
    })
};

await calculateHash();