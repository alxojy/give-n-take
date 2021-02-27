import express from 'express';

import { getDonationDetails, getAllDonationsByUser, createDonation, addDonationStatus } from '../controllers/donation.js';

const router = express.Router();

router.get('/:donation_id', getDonationDetails);
router.get('/user/:user_id', getAllDonationsByUser);
router.post('/', createDonation);
router.post('/:donation_id', addDonationStatus);


export default router;