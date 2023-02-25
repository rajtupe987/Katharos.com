const mongoose = require("mongoose");

const shoesSchema = mongoose.Schema({
    id: Number,
    image: String,
    title: String,
    diss: String,
    price: Number

});


const shoesmodel = mongoose.model("shoes", shoesSchema);

module.exports = {
    shoesmodel
}