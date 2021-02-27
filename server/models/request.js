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
        default: new Date()
    },
    fulfilledDate: {
        type: Date,
        default: 0
    },
})

var request = mongoose.model('Request', requestSchema);

export default request;