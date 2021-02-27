import express from 'express';
import mongoose from 'mongoose';

import Request from '../models/request.js';  
import ItemRequest from '../models/itemRequest.js'; 
import Item from '../models/item.js';  

const router = express.Router();


export const createRequest = async (req, res) => {

    const { user } = req.params
    const { title, desc, items } = req.body

    const newRequest = new Request({ user, title, desc });

    try {
        const doc = await newRequest.save().then( doc => {
            req.body.items.forEach(async (item) => {
                var { id, quantity } = item;
                var newItemRequest = new ItemRequest({
                    request: doc.id,
                    item: id,
                    quantity: quantity
                })
                await newItemRequest.save();
            });
        });
        res.status(200).json(doc);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

export const getRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const doc = await Request.findById(id).populate(
                'user', 
                ['name']
            ).populate({
                path: 'itemRequests',
                select: { '__v': 0 },
                populate: {
                    path: 'item',
                    select: { '__v': 0 }
                }
            });
        res.status(200).json(doc);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


export const getRequestsByUser = async (req, res) => {
    const { user }  = req.params;
    try {
        const doc = await Request.find({ 
                user: mongoose.mongo.ObjectId(user)
            }).populate(
                'user', 
                ['name']
            ).populate({
                path: 'itemRequests',
                select: { '__v': 0 },
                populate: {
                    path: 'item',
                    select: { '__v': 0 }
                }
            }).sort({
                requestDate: -1
            });
        res.status(200).json(doc);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


export const getAllRequests = async (req, res) => {
    try {
        const doc = await Request.find({}).populate(
                'user', 
                ['name']
            ).populate({
                path: 'itemRequests',
                select: { '__v': 0 },
                populate: {
                    path: 'item',
                    select: { '__v': 0 }
                }
            }).sort({
                requestDate: 1
            })
        res.status(200).json(doc);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


export default router;
