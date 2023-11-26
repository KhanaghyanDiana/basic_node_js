import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
import path from "node:path";
import zlib from 'zlib.js'
import fs from "fs.js";
const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)
const pathToFile = path.join(__dirname, "files" , 'fileToCompress.txt')
const gzip = zlib.createGzip();

const compress = async () => {
    // Write your code here
    const readable = fs.createReadStream(pathToFile)
    const writeable = fs.createWriteStream( path.join(__dirname, "files" , 'archive.gz'))
    readable.pipe(gzip).pipe(writeable)

};

await compress();