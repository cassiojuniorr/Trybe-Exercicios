const express = require('express');
const activites = require('../mock/activites.json');
// const { readActivite, addActivites } = require('../utils/peopleFuncs');

const router = express.Router();

router.get('/activities', async (_req, res) => {
    // const activites = await readActivite();
    res.status(200).json(activites);
});

router.post('/activities', (req, res) => {
    const { body } = req;
  
    activites.push(body);
    // addActivites(body);

    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;