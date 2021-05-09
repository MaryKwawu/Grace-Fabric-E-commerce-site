const mongoose = require("mongoose");

const dbUrl =
  process.env.MONGODB_URI || "mongodb://localhost:27017/grace_fabrics";

console.log(dbUrl);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err.message, "Failed to connect to database"));
