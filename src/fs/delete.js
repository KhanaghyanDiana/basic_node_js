import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
import path from "node:path";
import fs from "fs.js";


let __fileName= fileURLToPath(import.meta.url)
let __dirname = dirname(__fileName)
let filePath = path.join(__dirname, "files")
const remove = async () => {
    // Write your code here
    fs.readdir(filePath,(err, files)=>{
        let destinationFile = path.join(filePath, files[3])
        if(fs.existsSync(destinationFile)){
            throw new Error("FS operation failed")
        }
        fs.unlink(destinationFile,(err)=>{
           if(err){
               console.log()
           }
           console.log("File is deleted")
       })
    })
};

await remove();