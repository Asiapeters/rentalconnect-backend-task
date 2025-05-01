const mongoose = require("mongoose");
const host = process.env.DB_Host || "127.0.0.1"; // use environment variable or default
const dbURL = `mongodb://${host}/rentalConnect`;
const readLine = require("readline");

// connects to the MongoDB database
const connect = () => {
    setTimeout(() => mongoose.connect(dbURL, {}), 1000);
};

// connection event listeners
// When connection is successful
mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${dbURL}`);
});

// When connection has an error
mongoose.connection.on("error", () => {
    console.log("Mongoose connection error: ", err);
});

// When database is disconnected
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

// listener for Windows
if (process.platform === "win32") {
    const r1 = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    r1.on("SIGINT", () => {
        process.emit("SIGINT");
    });
} 

// configure for shutdown
const shutdown = (msg) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};

// event listeners to process shutdowns
process.once("SIGUSR2", () => {// Shutdown invoked by nodemon signal
    shutdown("nodemon restart");
    process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", () => {// Shutdown invoked by app termination
    shutdown("app termination");
    process.exit(0);
});

process.on("SIGTERM", () => {// Shutdown invoked by container termination
    shutdown("app shutdown");
    process.exit(0);
});

// establishes initial connection to DB
connect();

// import mongoose schema
require("./rental");
module.exports = mongoose;
