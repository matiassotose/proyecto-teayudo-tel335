const express = require("express");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 9000;
const app = express();

mongoose
    .connect(
        process.env.MONGODB_URI
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));

// middleware
app.use(express.json());
app.use("/api", userRoutes);

app.listen(port, () => console.log('server listening on port', port));