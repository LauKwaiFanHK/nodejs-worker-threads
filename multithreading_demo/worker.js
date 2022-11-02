// Code in this file is executed by the worker we created.
// Should put code of a CPU-intensive task in here.

const { parentPort } = require("worker_threads");

// This worker listens for message posted by the main thread.
// 'message' event triggers when the main thread post a message to this worker.
// This allows reusing the same worker to carry out every counting since creating new worker has high overhead. 
parentPort.on("message", data => {
    parentPort.postMessage({ str: data.str, count: countAlphabets(data.str) }); // This worker posts a message (i.e. output) to the main thread.
});

function countAlphabets(str) {
    if (!str) {
        return 0;
    } else {
        return str.length; // Note: this implementation should be sth CPU intensive e.g. a recursive function.
    }
}