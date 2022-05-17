const router = require('express').Router();
const path = require('path');
const db = require('../../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'UTF8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    });

});

router.post('/notes', (req, res) => {
    fs.readFile('db/db.json', 'UTF8', (err, data) => {
        if (err) {
            throw err;
        }
        let newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text
        };
        const jsonNotes = JSON.parse(data);
        jsonNotes.push(newNote);
        fs.writeFile('db/db.json', JSON.stringify(jsonNotes), (err) => {
            if (err) {
                throw err;
            }
            res.send(jsonNotes);
        });
    });


});

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    fs.readFile('db/db.json', 'UTF8', (err, data) => {
        if (err) {
            throw err;
        }
        const jsonNotes = JSON.parse(data);
        const filteredNotes = jsonNotes.filter(note => note.id != noteId);
        fs.writeFile('db/db.json', JSON.stringify(filteredNotes), (err) => {
            if (err) {
                throw err;
            };
            res.send(filteredNotes);
        });
    });
});

module.exports = router;