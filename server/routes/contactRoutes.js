import express from 'express';
import {
  submitMessage,
  scheduleVisit,
  getAvailableTimeSlots,
} from '../controllers/contactController.js';

const router = express.Router();

router.post('/message', submitMessage);
router.post('/visit', scheduleVisit);
router.get('/timeslots', getAvailableTimeSlots);

export default router;