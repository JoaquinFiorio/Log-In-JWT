const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:/angular-auth").then((db) => console.log("Connected"))
    .catch((err) => console.error(err));