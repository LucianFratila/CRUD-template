const mongoose = require('mongoose');
let itemSchema = new mongoose.Schema({
    name:{
        type:String
    }
})
let Item = module.exports = mongoose.model("Item", itemSchema);