const express = require('express');
const router = express.Router();

// Dummy data for artists
let artists = [
  { id: 1, name: 'Jimi Hendrix', instrument: 'Guitar' },
  { id: 2, name: 'Freddie Mercury', instrument: 'Piano' },
  { id: 3, name: 'Miles Davis', instrument: 'Trumpet' },
];

// GET all artists
router.get('/', (req, res) => {
  res.json(artists);
});

// GET a specific artist by ID
router.get('/:id', (req, res) => {
  const artist = artists.find(art => art.id == req.params.id);
  if (artist) {
    res.json(artist);
  } else {
    res.status(404).send('Artist not found');
  }
});

// POST a new artist
router.post('/', (req, res) => {
  const newArtist = {
    id: artists.length + 1,
    name: req.body.name,
    instrument: req.body.instrument,
  };
  artists.push(newArtist);
  res.status(201).json(newArtist);
});

// PUT to update an existing artist
router.put('/:id', (req, res) => {
  const artist = artists.find(art => art.id == req.params.id);
  if (artist) {
    artist.name = req.body.name;
    artist.instrument = req.body.instrument;
    res.json(artist);
  } else {
    res.status(404).send('Artist not found');
  }
});

// DELETE an artist
router.delete('/:id', (req, res) => {
  const index = artists.findIndex(art => art.id == req.params.id);
  if (index !== -1) {
    artists.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Artist not found');
  }
});

module.exports = router;
