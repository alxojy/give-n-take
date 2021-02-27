import mongoose from 'mongoose';

const cashDonationSchema = mongoose.Schema({
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: Number,
    date: {
        type: Date,
        default: Date.now
    },
})

var cashDonation = mongoose.model('CashDonation', cashDonationSchema);

export default cashDonation;