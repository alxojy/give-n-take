import mongoose from 'mongoose';

const donationItemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    donation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'donation'
    },
    quantity: Number,
})

var donationItem = mongoose.model('donationItem', donationItemSchema);

export default donationItem;