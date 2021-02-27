import express from 'express';

import { getCashDonationsByUser, createCashDonation } from '../controllers/cashDonations.js';

const router = express.Router();

router.get('/:user', getCashDonationsByUser);
router.post('/:user', createCashDonation);

export default router;