// Code in this file is executed by the main thread.
const { Worker } = require("worker_threads");

const myString = "Billy Wonker";
// Use Node.js Worker class to create a new worker for the main thread (also called parent thread).
// Pass a path of a file that will be executed by the worker thread as first argument.
const mainThreadWorker = new Worker("./worker.js");

// Attach listeners to the main thread worker.
// 'message' event triggers when the worker from worker.js post a message to this main thread. 
mainThreadWorker.on("message", output => {
    console.log(`The word '${output.str}' has ${output.count} alphabets. `);
});

// Main thread continues to excute without waiting for outputs.
// 'Hello world' is printed before the above output is returned.
console.log('Hello world!');

// Main thread worker post messages with data to the worker in worker.js,
// hence the same worker in worker.js is used to run multiple CPU-intensive operations.
mainThreadWorker.postMessage({ str: "myString" });
mainThreadWorker.postMessage({ str: myString });
