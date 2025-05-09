import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';
import Visit from '../models/visitModel.js';

// @desc    Submit a contact message
// @route   POST /api/contact/message
// @access  Public
const submitMessage = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    res.status(400);
    throw new Error('Please fill all required fields');
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    message,
  });

  if (contact) {
    res.status(201).json({
      message: 'Message sent successfully',
    });
  } else {
    res.status(400);
    throw new Error('Failed to send message');
  }
});

// @desc    Schedule a visit
// @route   POST /api/contact/visit
// @access  Public
const scheduleVisit = asyncHandler(async (req, res) => {
  const { name, email, phone, date, time, purpose } = req.body;

  if (!name || !email || !phone || !date || !time || !purpose) {
    res.status(400);
    throw new Error('Please fill all required fields');
  }

  // Check if the time slot is available
  const existingVisit = await Visit.findOne({
    date: new Date(date),
    time,
    status: { $ne: 'cancelled' },
  });

  if (existingVisit) {
    res.status(400);
    throw new Error('This time slot is already booked. Please choose another time.');
  }

  const visit = await Visit.create({
    name,
    email,
    phone,
    date,
    time,
    purpose,
  });

  if (visit) {
    res.status(201).json({
      message: 'Visit scheduled successfully',
    });
  } else {
    res.status(400);
    throw new Error('Failed to schedule visit');
  }
});

// @desc    Get available time slots for a specific date
// @route   GET /api/contact/timeslots
// @access  Public
const getAvailableTimeSlots = asyncHandler(async (req, res) => {
  const { date } = req.query;

  if (!date) {
    res.status(400);
    throw new Error('Please provide a date');
  }

  const allTimeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  // Get booked slots for the date
  const bookedVisits = await Visit.find({
    date: new Date(date),
    status: { $ne: 'cancelled' },
  }).select('time -_id');

  const bookedTimeSlots = bookedVisits.map(visit => visit.time);
  const availableTimeSlots = allTimeSlots.filter(time => !bookedTimeSlots.includes(time));

  res.json(availableTimeSlots);
});

export { submitMessage, scheduleVisit, getAvailableTimeSlots };