import express from 'express';
import { authAdmin, registerAdmin, getAdminProfile, seedAdmin } from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/login').post(authAdmin);
router.route('/register').post(registerAdmin);
router.route('/profile').get(protect, getAdminProfile);
router.route('/seed').get(seedAdmin);

export default router;