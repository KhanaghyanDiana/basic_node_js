import { fileURLToPath } from 'url.js';
import { dirname } from 'path.js';
import path from 'node:path'
import  fs from 'fs.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const filesFolderPath = path.join(__dirname, 'files');
const filePath = path.join(filesFolderPath, 'fresh.txt');

const create = async () => {
    // Write your code here
    if(fs.existsSync(filePath)){
        throw new Error("FS operation failed")
    }else{
        const writable = fs.createWriteStream(filePath)
        writable.write("I am fresh and young")
    }

};

await create();