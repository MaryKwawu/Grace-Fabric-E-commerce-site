const express = require("express");

//connect to database
require("./config/dbConnect");

const app = express();
app.use(express.json());

app.use("/auth", require("./routes/authRouter"));

app.use("/user", require("./routes/userRouter"));

app.use("/products", require("./routes/productRouter"));

app.listen(4000, () => console.log("Server functioning"));
