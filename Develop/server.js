const express = require('express');
const path = require('path');
const htmlRoutes = require('./controllers/htmlRoutes');
const noteRoutes = require('./controllers/api/noteRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', noteRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => console.log('Now listening'));