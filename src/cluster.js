var cluster = require('cluster');
var os = require('os');
var express = require('express');
var totalCPUs = os.cpus().length;
var port = 3000;
if (cluster.isMaster) {
    //   console.log(`Number of CPUs is ${totalCPUs}`);
    //   console.log(`Primary ${process.pid} is running`);
    // Fork workers.
    for (var i = 0; i < 2; i++) {
        cluster.fork();
    }
    cluster.on('listening', function (worker, address) {
        console.log(address);
        console.log("A worker is now connected to ".concat(address.address, ":").concat(address.port));
    });
    process.on('message', function (msg) {
        console.log("message send : ", msg);
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log("worker ".concat(worker.process.pid, " died"));
        console.log("Let's fork another worker!");
        cluster.fork();
    });
}
else {
    var app = express();
    console.log("Worker ".concat(process.pid, " started"));
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
    app.get('/api/:n', function (req, res) {
        var n = parseInt(req.params.n);
        var count = 0;
        if (n > 5000000000)
            n = 5000000000;
        for (var i = 0; i <= n; i++) {
            count += i;
        }
        res.send("Final count is ".concat(count, " ").concat(process.pid));
    });
    app.listen(port, function () {
        console.log("App listening on port ".concat(port));
    });
}
