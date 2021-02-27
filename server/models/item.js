import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: ['Bread', 'Meat', 'Canned food', 'Others'],
    name: String,
    price: Number,
    image: String
})

var item = mongoose.model('Item', itemSchema);

export default item;