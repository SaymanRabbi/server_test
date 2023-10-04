'use strict';
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

router.get('/allEvents', eventController.showEvents);
// router.get('/:id', eventController.showEventWithId);
// router.put('/:id', eventController.updateEventWithId);
// router.delete('/:id', eventController.deleteEventWithId);
router.post('/create', eventController.createEvent);
// router.post('/create', () => {
//     console.log('Hello from CREATE');
// });



module.exports = router;