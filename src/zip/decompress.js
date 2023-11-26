import fs from "fs.js";
import path from "node:path";
import zlib from "zlib.js";
import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)
const pathToFile = path.join(__dirname, "files" , 'archive.gz')
const gunzip = zlib.createGunzip();
const decompress = async () => {
    // Write your code here
    const readable = fs.createReadStream(pathToFile)
    const writeable = fs.createWriteStream( path.join(__dirname, "files" , 'decompressed.txt'))
    readable.pipe(gunzip).pipe(writeable)
};

await decompress();