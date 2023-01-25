//imports
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const products = require("./routes/products");

const app = express();
const port = process.env.PORT || 5000; //5000


app.get("/", (req, res) => {
    res.send('Hello Product App!');
});

app.use("/api/products", products); //Products

//middlewares
app.use(cors()); //Enables Cross-Origin Resource Sharing on Express.js app
app.use(express.json()); //Telling express.js app to use the JSON middleware
app.use(express.urlencoded({extended: true})); //the urlencoded middleware parses incoming request bodies that are encoded in the `urlencoded` format.
app.use(express.static("uploads")); //static middleware which allows to serve static files from a specific folder
mongoose.set("strictQuery", false);

//database connection
mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('Connected to database...'))
    .catch((err) => console.log(err));

//start server
app.listen(port, ()=> console.log(`server runnning at http://localhost:${port}`));

module.exports = app;