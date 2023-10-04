'use strict';

const EventModel = require('../models/Event.model');

//post: create(req.body)
//read all: find({})
//read one: findById(req.params.id)
//update one: findByIdAndUpdate(req.params.id, req.body, { new: true })
//delete one: deleteById(req.params.id)



const showEvents = async (req, res) => {
  try {
    const events = await EventModel.find({});
    // console.log(events);
    const eventDates = events.map((event) => 
    `Date: ${event.date.toLocaleString('default', { day: "numeric", weekday: "long", month: 'long', year: "numeric", })}`);
    const eventDay = events.map((event) => 
    event.date.toLocaleString('default', { day: "numeric" }));
    const eventMonth = events.map((event) => 
    event.date.toLocaleString('default', { month: "long" }));

    const eventYear = events.map((event) => 
    event.date.toLocaleString('default', { year: "numeric" }));

    const eventTitle = events.map((event) => event.title);
    // console.log(eventTitle);
    const eventVenue = events.map((event) => event.venue);
    
    res.status(200).send({
   
        eventDates,
        eventDay,
        eventMonth,
        eventYear,
        eventTitle,
        eventVenue
    });

  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const showEventWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await EventModel.findById(id);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const updateEventWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await EventModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).send(event);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const deleteEventWithId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: 'Please provide an id' });
    }
    const event = await EventModel.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }

    res.status(200).send(event);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};


const createEvent = async (req, res) => {
  try {
    console.log('Hello from CREATE');
    console.log(req.body);
    const event = await EventModel.create(req.body);
    // await event.save();
    console.log(event);
    res.status(201).send({ message: 'Date saved successfully',event });

  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  createEvent,
  showEvents,
  showEventWithId,
  updateEventWithId,
  deleteEventWithId,
}