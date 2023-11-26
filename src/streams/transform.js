import {Transform} from 'stream.js'

const transform = async () => {
    // Write your code here
    const reversedData =   new Transform({
            transform(chunk, encoding, callback) {
                callback(null, chunk.toString().split("").reverse().join(""));

            },
        });
    process.stdin.pipe(reversedData).pipe(process.stdout)

};

await transform()