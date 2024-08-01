const express = require('express');
const router = express.Router();

// Dummy data for musical instruments
let instruments = [
  { id: 1, name: 'Guitar', type: 'String' },
  { id: 2, name: 'Piano', type: 'Keyboard' },
  { id: 3, name: 'Trumpet', type: 'Brass' },
];

// GET all instruments
router.get('/', (req, res) => {
  res.json(instruments);
});

// GET a specific instrument by ID
router.get('/:id', (req, res) => {
  const instrument = instruments.find(inst => inst.id == req.params.id);
  if (instrument) {
    res.json(instrument);
  } else {
    res.status(404).send('Instrument not found');
  }
});

// POST a new instrument
router.post('/', (req, res) => {
  const newInstrument = {
    id: instruments.length + 1,
    name: req.body.name,
    type: req.body.type,
  };
  instruments.push(newInstrument);
  res.status(201).json(newInstrument);
});

// PUT to update an existing instrument
router.put('/:id', (req, res) => {
  const instrument = instruments.find(inst => inst.id == req.params.id);
  if (instrument) {
    instrument.name = req.body.name;
    instrument.type = req.body.type;
    res.json(instrument);
  } else {
    res.status(404).send('Instrument not found');
  }
});

// DELETE an instrument
router.delete('/:id', (req, res) => {
  const index = instruments.findIndex(inst => inst.id == req.params.id);
  if (index !== -1) {
    instruments.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Instrument not found');
  }
});

module.exports = router;
