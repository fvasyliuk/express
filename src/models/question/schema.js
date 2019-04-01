const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    title: {
        type:String,
        required: [true],
    },
    id: {
        type:Number,
        required: [true],
    },
    img: {
        type:String,
        required: [true],
    },
    category: {
        type:String,
        required: [true],
    },
    price: {
        type:Number,
        required: [true],
    },


})

module.exports = { schema };