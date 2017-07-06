
const PORT          = process.env.PORT || 8080;
const express       = require("express");
const app           = express();
const bodyParser    = require("body-parser");

// const ENV           = process.env.ENV || "development";
// const cookieSession = require('cookie-session');
// const knexConfig    = require("./knexfile");
// const knex          = require("knex")(knexConfig[ENV]);
// const morgan        = require('morgan');
// const knexLogger    = require('knex-logger');
// var bcrypt          = require("bcrypt");

//require('dotenv').config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/home", (req, res) => {
    res.render("homePage")
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
