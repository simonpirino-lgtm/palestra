const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const trainerRoutes = require('./routes/trainerRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json());

app.use('/api/trainers', trainerRoutes);
app.use('/api/customers', customerRoutes);

app.listen(3000, () => {
    console.log('Server avviato su porta 3000');
});