const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'palestra'
});

db.connect((err) => {
    if (err) {
        console.log('Errore connessione DB:', err);
    } else {
        console.log('MySQL connesso');
    }
});

app.get('/clienti', (req, res) => {
    db.query('SELECT * FROM customer', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3000, () => {
    console.log('Server avviato su porta 3000');
});