import mongoose from 'mongoose';

const donationSchema = mongoose.Schema({
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
    image: String,
})

var donation = mongoose.model('donation', donationSchema);

export default donation;