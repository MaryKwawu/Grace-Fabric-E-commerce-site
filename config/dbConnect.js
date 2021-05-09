const mongoose = require("mongoose");

const dbUrl =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://mary:mary123@cluster0.gudcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    : "mongodb://localhost:27017";

mongoose
  .connect(dbUrl, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "grace_fabrics",
  })
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err.message));
