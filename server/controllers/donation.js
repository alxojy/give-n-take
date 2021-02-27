import express from 'express';
import mongoose from 'mongoose';

import Donation from '../models/donation.js';
import DonationItem from '../models/donationItem.js';
import Item from '../models/item.js';
import Request from '../models/request.js';

const router = express.Router();

// return the items related to a particular donation
export const getDonationDetails = async (req, res) => { 
    const { donation_id } = req.params;

    try {
        const donationItem = await DonationItem.find({"donation": donation_id}).populate('item');
        const donation = await Donation.findById(donation_id).populate('request');

        res.status(200).json({donationItem, donation});
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllDonationsByUser = async (req, res) => { 
    const { user_id } = req.params;

    try {
        const donations = await Donation.find({"donor": user_id}).populate('request');
        res.status(200).json(donations);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDonation = async (req, res) => { 
    const { donor, request, items } = req.body;

    const newDonation = new Donation({donor, request});

    try {
        await newDonation.save().then(res => {
            items.forEach(async item => {
                await new DonationItem({
                    donation: res._id, 
                    item: item._id, 
                    quantity: item.quantity
                }).save()
            })
        });
        res.status(201).json(newDonation);
    } 
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addDonationStatus = async (req, res) => { 
    const { id, image } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No donation with id: ${id}`);

    const updatedDonation = await Donation.findByIdAndUpdate(id, {image});
    res.json(updatedDonation);
}


export default router;
