import express from 'express';
import CashDonation from '../models/cashDonation.js';
import DonationItem from '../models/donationItem.js';
import Item from '../models/item.js';
import Donation from '../models/donation.js';
import ItemRequest from '../models/itemRequest.js';
import Request from '../models/request.js';
import User from '../models/user.js';

const router = express.Router();

const getDb = async (name) => {
    switch (name) {
        case 'User': 
            return User;
        case 'DonationItem': 
            return DonationItem;
        case 'Item': 
            return Item;
        case 'Donation': 
            return Donation;
        case 'ItemRequest': 
            return ItemRequest;
        case 'Request': 
            return Request;
        case 'CashDonation': 
            return CashDonation;
    }
}

router.post('/:db_name', async (req, res) => {
    try {
        const db = await getDb(req.params.db_name);
        const retval = await db.insertMany(req.body);
        res.status(200).json(retval);
    } catch (err) {
        res.status(418).json({ message: err.message });
    }
})

router.get('/:db_name', async (req, res) => {
    try {
        const db = await getDb(req.params.db_name);
        const list = await db.find({});
        res.status(200).json(list);
    } catch (err) {
        res.status(418).json({ message: err.message });
    }
})


router.delete('/:db_name', async (req, res) => {
    try {
        const db = await getDb(req.params.db_name);
        const retval = await db.remove({});
        res.status(200).json(retval);
    } catch (err) {
        res.status(418).json({ message: err.message });
    }
})


export default router;