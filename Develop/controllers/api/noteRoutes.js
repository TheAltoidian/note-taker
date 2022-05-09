const router = require('express').Router();
const path = require('path');
const db = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    res.send(db);
});

module.exports = router;