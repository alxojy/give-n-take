import express from 'express';

import { getUserDetails, getUserByType, saveUserDetails } from '../controllers/user.js';

const router = express.Router();

router.get('/:id', getUserDetails);
router.get('/type/:type', getUserByType);
router.post('/', saveUserDetails);


export default router;