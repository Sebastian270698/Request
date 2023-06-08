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

    app.use(express.json()); // Middleware per il parsing del body delle richieste POST

    app.post('/inserisciDati', (req, res) => {
        const dati = req.body; // I dati inviati nel corpo della richiesta POST
        connection.query('INSERT INTO users (id, username, email) VALUES (?, ?, ?)', [dati.id, dati.username, dati.email], function (err, results) {
            if (err) {
                console.error(err);
                res.status(500).send('Errore durante l\'inserimento dei dati');
            } else {
                res.send('Dati inseriti correttamente!');
            }
        });
    });
    
    app.listen(3000, () => {
        console.log('Server avviato sulla porta 3000');
    });
});
