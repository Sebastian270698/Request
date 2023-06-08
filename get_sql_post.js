
const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'iliade.polliniapp.it',
    user: 'impara',
    password: 'impara',
    database: 'scuola_programmazione'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connessione al database avvenuta con successo');

    app.get('/json1', (req, res) => {
        connection.query('SELECT * FROM customers', function (err, results) {
            if (err) throw err;
            res.json(results);
        });
    });

    app.get('/json2', (req, res) => {
        connection.query('SELECT * FROM PROVA2', function (err, results) {
            if (err) throw err;
            res.json(results);
        });
    });

    app.get('/json3', (req, res) => {
        connection.query('SELECT * FROM users', function (err, results) {
            if (err) throw err;
            res.json(results);
        });
    });

    app.listen(3000, () => {
        console.log('Server avviato sulla porta 3000');
    });
});
