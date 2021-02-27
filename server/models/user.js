import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    dob: Date,
    addr: String,
    occupation: String,
    email: String,
    isDonor: Boolean,
    bio: String,
    image: String,
    type: {
        type: String,
        enum: ['business', 'organisation', 'individual']
    }
})

var user = mongoose.model('User', userSchema);

export default user;