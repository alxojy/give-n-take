import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    type: {
        type: String,
        enum: [
            "Personal hygiene",
            "Pets",
            "Grocery",
            "Household",
            "School Supplies",
            "Others"
        ],
        default: 'Others'
    },
    name: String,
    price: Number,
    image: String
})

var item = mongoose.model('Item', itemSchema);

export default item;