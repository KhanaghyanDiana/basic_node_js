import {parentPort, Worker} from "node:worker_threads";
import {fileURLToPath} from "url.js";
import {dirname} from "path.js";
import path from "node:path";
import * as os from "os.js";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = path.join(__dirname, 'worker.js')

const numCores = os.cpus().length;

let completedWorker = 0
let result = []
const performCalculations = async () => {
    // Write your code here
    const  checkWorkerHasFinishedOrNot= ()=>{
        completedWorker +=1
    if(completedWorker === numCores){
        console.log(result)
    }
}
    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(filePath, {
            workerData: i + 10,
        });

        worker.on("message", (data) => {
            result[i] = {
                status: "resolved",
                data,
            };
            checkWorkerHasFinishedOrNot();
        });

        worker.on("error", () => {
            result[i] = {
                status: "error",
                data: null,
            };
            checkWorkerHasFinishedOrNot();
        });
    }


};

await performCalculations();