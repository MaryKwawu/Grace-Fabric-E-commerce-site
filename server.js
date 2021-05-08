const express = require("express");

//connect to database
require("./config/dbConnect");

const app = express();
app.use(express.json());

app.use("/auth", require("./routes/authRouter"));

app.use("/user", require("./routes/userRouter"));

app.use("/products", require("./routes/productRouter"));

const port = process.env.NODE_ENV || 4000;

process.stdin.resume(); //so the program will not close instantly

function exitHandler(options, exitCode) {
  if (options.cleanup) console.log("clean");
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

//do something when app is closing
process.on("exit", exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

//catches uncaught exceptions
process.on("uncaughtException", exitHandler.bind(null, { exit: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
