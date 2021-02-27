import express from 'express';

import { createRequest, getRequest, getRequestsByUser, getAllRequests } from '../controllers/requests.js';

const router = express.Router();

router.get('/', getAllRequests);
router.get('/:id', getRequest);
router.get('/user/:user', getRequestsByUser);
router.post('/:user', createRequest);

export default router;