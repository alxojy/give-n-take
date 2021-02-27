import express from 'express';
import mongoose from 'mongoose';

import CashDonation from '../models/cashDonation.js';

const router = express.Router();


export const createCashDonation = async (req, res) => {
    const { user } = req.params;
    const { receiver, amount } = req.body;
    const newCashDonation = new CashDonation({
        donor: mongoose.mongo.ObjectId(user),
        receiver: mongoose.mongo.ObjectId(receiver),
        amount: amount
    });

    try {
        const doc = await newCashDonation.save();
        res.status(200).json(doc);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

export const getCashDonationsByUser = async (req, res) => {
    const { user } = req.params;
    try {
        const doc = await CashDonation.find({ 
                "donor": mongoose.mongo.ObjectId(user)
            }).sort({
                date: -1
            }).populate(
                'receiver', 
                ['name']
            );
        res.status(200).json(doc);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


export default router;