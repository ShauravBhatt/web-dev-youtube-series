const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Creating a custom event
myEmitter.once("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js`);
});

// Emitting the event
setInterval(() => {
  myEmitter.emit("greet", "Bhatt");
},3000);
