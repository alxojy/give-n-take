import express from 'express';

import { getAllItems } from '../controllers/items.js';

const router = express.Router();

router.get('/', getAllItems);

export default router;