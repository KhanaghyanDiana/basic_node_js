import {fileURLToPath} from "url.js";
import path, {dirname} from "path.js";
import fs from "fs.js";


const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)
const pathToFile = path.join(__dirname, "files" , 'fileToWrite.txt')

const write = async () => {
    // Write your code here
     const writeable = fs.createWriteStream(pathToFile)
      process.stdin.on('data', data => {
          const cleanedData = data.toString().trim();
        writeable.write(cleanedData)
    })
    process.stdin.on('end', () => {
        console.log('The File is closed');
        writeable.end();
    });

};

await write();