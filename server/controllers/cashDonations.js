import express from 'express';
import mongoose from 'mongoose';

import CashDonation from '../models/cashDonation.js';
import User from '../models/user.js';

const router = express.Router();


// export const createCashDonation = async (req, res) => {
//     try {
//         const cashDonations = await CashDonation.find(
//                 { "donor": mongoose.mongo.ObjectId(req.params.userId)
//             }).sort(
//                 {date: -1}
//             ).populate(
//                 'receiver', 
//                 ['name', 'occupation']
//             )
//         res.status(200).json(cashDonations);
//     } catch (err) {
//         res.status(404).json({ message: err.message });
//     }
// }

export const getCashDonationsByUser = async (req, res) => {
    try {
        const cashDonations = await CashDonation.find(
                { "donor": mongoose.mongo.ObjectId(req.params.userId)
            }).sort(
                {date: -1}
            ).populate(
                'receiver', 
                ['name', 'occupation']
            )
        res.status(200).json(cashDonations);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


export default router;