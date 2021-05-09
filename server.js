const express = require("express");
const dotenv = require("dotenv");

//connect to database
require("./config/dbConnect");

try {
  const key = dotenv.config({ path: `./.env` });
  console.log("dotenv loaded");
} catch (error) {
  console.log(error, "error loading dotenv");
}

const app = express();
app.use(express.json());

app.use("/auth", require("./routes/authRouter"));

app.use("/user", require("./routes/userRouter"));

app.use("/products", require("./routes/productRouter"));

const port = process.env.NODE_ENV || 4000;

app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      require("child_process").exec(
        `echo ${process.env.PASS} | sudo -S kill -9 $(lsof -t -i:${port})`,
        (err) => {
          if (err) console.log(`error from child_process exec: ${err}`);
        }
      );
    }
  });
