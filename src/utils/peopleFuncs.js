const activites = require('../mock/activites');

const addActivite = (res, newActivite) => {
    console.log('exc');
    activites.push(newActivite);
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
};

module.exports = {
    addActivite,
};