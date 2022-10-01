const express = require('express');
const activites = require('../mock/activites');
// const addActivites = require('../utils/peopleFuncs');

const router = express.Router();

router.get('/activities', (_req, res) => {
    res.status(200).json(activites);
});

router.post('/activities', (req, res) => {
    const { body } = req;
  
    activites.push(body);

    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;