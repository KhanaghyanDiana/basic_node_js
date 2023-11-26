import process from 'node:process'


const parseEnv = () => {
    // Write your code here
    const prefix = "RSS_"
    const args = process.argv.slice(2)
   if(args.length > 0){
    args.forEach((item)=>{
        console.log(prefix + item)
    })}
    console.log("Please provide arguments")


};

parseEnv();