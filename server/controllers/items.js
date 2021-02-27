import express from 'express';
import mongoose from 'mongoose';

import Item from '../models/item.js';

const router = express.Router();


export const getAllItems = async (req, res) => {
    try {
        const doc = await Item.find({})
        res.status(200).json(doc);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


export default router;