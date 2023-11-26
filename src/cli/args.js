const parseArgs = () => {
    // Write your code here
    const args = process.argv.slice(2)
    for (let i = 0; i < args.length; i += 2) {
        const replacedProp = args[i].replace(/^--/, "");
        const val = args[i + 1];
        console.log(`${replacedProp} is ${val}`);
    }
};

parseArgs();