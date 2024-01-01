const express = require('express');
const router = express.Router();

// Login page
router.get('/login', (req, res) => res.send(`Login`));

// Register page
router.get('/registrieren', (req, res) => res.send(`Registrieren`));

module.exports = router;