import mongoose from 'mongoose';

const requestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    desc: String,
    requestDate: {
        type: Date,
        default: Date.now
    },
    fulfilledDate: Date,
})

var request = mongoose.model('Request', requestSchema);

export default request;