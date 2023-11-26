import path from "node:path";
import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
import fs from "fs.js";

console.log(path.sep(""))
//  convert url to a path
const __filename = fileURLToPath(import.meta.url);

//  get the dirname
const __dirname = dirname(__filename)
//  path to the fs/files
const filesFolderPath = path.join(__dirname, 'files');
const copy = async () => {
    // Write your code here

    //  create the path where to copy the files
    const destinationFolderPath = path.join(filesFolderPath, 'files_copy');
    const fileName = "copy_files.txt";
    const folderPath = filesFolderPath + "\\" + 'files_copy'
    let pathFile=  path.join(folderPath, fileName)
    if(fs.existsSync(pathFile)){
        throw  new Error("FS operation failed")
    }else{
        fs.mkdir(destinationFolderPath, { recursive: true }, (err)=>{
            if(err){
                console.log(err)
            }
        });
    }
    fs.readdir(filesFolderPath, (err, files) => {
        if (err)
            console.log(err);
        else {
            files.forEach((item) => {
                const sourceFilePath = path.join(filesFolderPath, item);
                const readable = fs.createReadStream(sourceFilePath);
                readable.on('data', (chunk) => {
                    const writable =fs.createWriteStream(pathFile, {flags: 'a'})
                    writable.write(chunk);
                });

                readable.on('end', () => {
                    console.log(`File ${item} content appended to index.txt.`);
                });

                readable.on('error', (err) => {
                    console.error(`Error reading file ${item}: ${err.message}`);
                });
            });
        }
    })


};

await copy();
