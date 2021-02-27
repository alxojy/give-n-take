import express from 'express';
import User from '../models/user.js';

const router = express.Router();

export const getUserDetails = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await (await User.findById(id)).populate('type');
        res.status(200).json(user);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveUserDetails = async (req, res) => {
    const { bio, image, type, name, email, dob, isDonor, addr, occupation } = req.body;
    const newUser = new User({ bio, image, type, name, email, dob, isDonor, addr, occupation });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } 
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUserByType = async (req, res) => { 
    const { type } = req.params;
    const accepted_types = ['business', 'organisation', 'individual'];
    // error if not accepted types
    if (!accepted_types.includes(type)) {
        res.status(404).json({ message: "type should be " + accepted_types.toString() });
        return;
    }

    try {
        const user = await User.find({type: {$in: [type]}});
        res.status(200).json(user);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;
