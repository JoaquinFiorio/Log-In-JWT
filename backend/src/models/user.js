const { Schema, model} = require("mongoose");

const userSchema = new Schema({

    email : String,
    password : String

}, {
    timestamps: true //agrega campos createdAt y updatedAt

})

module.exports = model("User", userSchema)