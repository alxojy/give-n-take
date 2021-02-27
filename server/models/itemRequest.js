import mongoose from 'mongoose';

const itemRequestSchema = mongoose.Schema({
    request: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    quantity: Number
})

var itemRequest = mongoose.model('ItemRequest', itemRequestSchema);

export default itemRequest;