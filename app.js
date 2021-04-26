const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
/////////// ROUTES ////////////
const itemRouter = require('./routes/itemRoutes')
//////////////////////////////


dotenv.config({ path: "./config.env" });
let db = mongoose.connection;


//check db errors
db.on('error', function(err){
    console.log(err)
})

//init app/Start express application
const app = express();
// middleware cors
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.use("/api/v1/items", itemRouter);


//server
const port = process.env.PORT || 5000
var server = app.listen(port, console.log('Server started on port', port))


//DB settings

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection: online");
    });


module.exports = app;
