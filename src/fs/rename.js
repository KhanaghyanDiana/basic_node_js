import fs from "fs.js"
import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pathToFiles = path.join(__dirname, "files")


const rename = async () => {
    // Write your code here
    fs.readdir(pathToFiles, (err, files)=>{
        //  wrongFileName
        let parsedName = path.parse(files[6]).name
        let modifiedExtension  = parsedName + ".md"
        let pathToWrongFile = path.join(pathToFiles, files[6])
        const newFilePath = path.join(pathToFiles,modifiedExtension)
        fs.rename(pathToWrongFile, newFilePath ,(err)=>{
           if(fs.existsSync(newFilePath)){
               throw new Error("FS operation failed")
           }
           console.log("Successfully renamed")
        })


    })

};

await rename();