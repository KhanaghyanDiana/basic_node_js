import {parentPort, workerData} from 'node:worker_threads'

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
    parentPort?.postMessage(nthFibonacci(workerData))


};

sendResult();