const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017", {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "grace_fabrics"
    })
    .then(() => console.log("Database connection successful"))
    .catch((err) => console.log(err.message));
