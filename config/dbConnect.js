const mongoose = require("mongoose");

const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017";

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
