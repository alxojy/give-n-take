import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['Bread', 'Meat', 'Canned food', 'Others'],
        default: 'Others'
    },
    name: String,
    price: Number,
    image: String
})

var item = mongoose.model('Item', itemSchema);

export default item;