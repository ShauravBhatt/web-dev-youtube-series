const fs = require("fs");
const os = require("os");

const EventEmitter = require("events");

class Logger extends EventEmitter{
    log(message){
        this.emit('message',{message});
    }
}

const logger = new Logger();
const logFile = "./eventLog.txt";

const logToFile = (event) => {
    const logMessage = `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} : ${event.message}\n`;
    fs.appendFileSync(logFile,logMessage);
}

logger.on('message',logToFile);

setInterval(()=>{
    const memoryUsage = (os.freemem()/os.totalmem())*100;
    logger.log(`Current Memory Usage - ${memoryUsage.toFixed(2)}%`);
},2000)