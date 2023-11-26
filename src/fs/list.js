import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
import path from "node:path";
import fs from "fs.js";


let __filename = fileURLToPath(import.meta.url)
let __dirname = dirname(__filename)
let pathToFiles = path.join(__dirname, "files")
console.log(pathToFiles, "path")
const list = async () => {
    // Write your code here
    fs.readdir(pathToFiles, (err, fileNames) =>{
        if(fs.existsSync(pathToFiles)){
            throw new Error("FS operation failed")
        }
    })
};

await list();