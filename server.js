const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

try {
  const key = dotenv.config({ path: `./.env` });
  console.log("dotenv loaded");
} catch (error) {
  console.log(error, "error loading dotenv");
}

//connect to database
require("./config/dbConnect");

// excluding dotenv config from production
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/auth", require("./routes/authRouter"));

app.use("/user", require("./routes/userRouter"));

app.use("/products", require("./routes/productRouter"));
app.use("/cart", require("./routes/cartRouter"));

// CORS Middleware
app.use(cors());

// express middleware handling the form parsing
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    // res.sendFile(path.resolve(process.cwd(), "client/build/index.html"));
  });
}

const port = process.env.NODE_ENV === "production" ? process.env.PORT : 4000;
app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      require("child_process").exec(
        `echo ${process.env.PASS} | sudo -S kill -9 $(lsof -t -i:${port})`,
        (err) => {
          if (err) console.log(`error from child_process.exec: ${err}`);
        }
      );
    }
  });
