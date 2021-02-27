import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    dob: Date,
    addr: String,
    occupation: String,
    email: String,
    isDonor: Boolean,
    bio: {
        type: String,
        default: 0
    },
    image: {
        type: String,
        default: 0
    },
    type: ['business', 'organisation', 'individual'],
})

var user = mongoose.model('User', userSchema);

export default user;