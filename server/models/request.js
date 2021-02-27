import mongoose from 'mongoose';

const requestSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    desc: String,
    requestDate: {
        type: Date,
        default: Date.now
    },
    fulfilledDate: {
        type: Date,
        default: 0
    },
})


requestSchema.virtual('itemRequests', {
    ref: 'ItemRequest',
    localField: '_id',
    foreignField: 'request',
    justOne: false,
});

requestSchema.set('toObject', { virtuals: true });
requestSchema.set('toJSON', { virtuals: true });

var request = mongoose.model('Request', requestSchema);

export default request;