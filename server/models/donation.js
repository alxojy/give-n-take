import mongoose from 'mongoose';

const donationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    request: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        data: Buffer,
        contentType: String,
        default: 0
    },
})

var donation = mongoose.model('donation', donationSchema);

export default donation;