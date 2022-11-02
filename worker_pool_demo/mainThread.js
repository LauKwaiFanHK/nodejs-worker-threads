// This file demonstrates how to create a pool of workers from workers.js in multithreading_demo folder.
// Workers in the pool wait to be called to execute a task.
// With one worker, the application has to wait for the worker to finish a task execution to run the next task and cause long response times.
// Hence a worker pool provides inactive workers to execute task without delay.

const { StaticPool } = require("node-worker-threads-pool");

const workerPool = new StaticPool({
    size: 10,
    task: "../multithreading_demo/worker.js"
});

workerPool
    .exec({ str: "Billy Wooooooonka" })
    .then(output => {
        console.log(`The word '${output.str}' has ${output.count} alphabets.`);
    })

workerPool
    .exec({ str: "*&)*&#*Q&(%&(Q&%#*Q%&(Q*%&" })
    .then(output => {
        console.log(`The word '${output.str}' has ${output.count} alphabets.`);
    })