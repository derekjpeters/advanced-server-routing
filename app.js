const express = require('express');
const app = express();
const port = 3000;

//Middleware to parse the JSON data 
app.use(express.json());

//Import the routers
const instrumentsRouter = require('./routes/instruments');
const artistsRouter = require('./routes/artists');

//Use the routers
app.use('/instruments', instrumentsRouter);
app.use('/artists', artistsRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Music Instrument Manager API');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});