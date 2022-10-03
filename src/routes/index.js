const express = require('express');
const { nameValidation, priceValidation, descValidation } = require('../middlewares/validations');
const errors = require('../middlewares/erro');

const { readActivite, addActivites } = require('../utils/peopleFuncs');

const router = express.Router();

router.get('/activities', async (_req, res) => {
    const activites = await readActivite();
    res.status(200).json(activites);
});

router.use(nameValidation);
router.use(priceValidation);
router.use(descValidation);

router.post('/activities', async (req, res) => {
    const { body } = req;

    await addActivites(body, res);
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

router.use(errors);

module.exports = router;