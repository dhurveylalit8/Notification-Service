const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");

/**
 * Initializing the DB connection
 */
mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("Connected to mongo db")
}, err => {
    console.log("Some err occured", err.message);
})

/**
 * Stitch the router to server.js
 */
require("./routes/notification.route")(app);

/**
 * Attach the cron file also
 */
require("./Schedulars/emailSchedular")


app.listen(8000, () => {  //TODO : Move this port number to the config folder and the .env file
    console.log("Server started")
})