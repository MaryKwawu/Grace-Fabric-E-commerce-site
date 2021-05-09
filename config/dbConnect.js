const mongoose = require("mongoose");

const dbUrl =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://mary:mary123@cluster0.gudcv.mongodb.net/grace_fabrics?retryWrites=true&w=majority"
    : "mongodb://localhost:27017";

console.log(dbUrl);

mongoose
  .connect(dbUrl, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "grace_fabrics",
  })
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err.message, "Failed to connect to database"));
