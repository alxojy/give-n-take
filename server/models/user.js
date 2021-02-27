import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    dob: Date,
    addr: String,
    occupation: String,
    email: String,
    isDonor: Boolean,
    bio: String,
    image: String,
    type: ['business', 'organisation', 'individual'],
})

var user = mongoose.model('User', userSchema);

export default user;