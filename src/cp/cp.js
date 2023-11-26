import {spawn} from 'child_process.js'

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = spawn('node', ["src/cp/files/script.js", ...args], {
        stdio: ['pipe', 'pipe', 'pipe', ]
    });

    childProcess.stdin.on("data", (data) => {
        childProcess.stdin.write(data);
    });

    childProcess.stdout.on("data", (data) => {
        process.stdout.write(data);
    });

};

// Put your arguments in function call to test this functionality
await spawnChildProcess( ['arg', 'hello']);
