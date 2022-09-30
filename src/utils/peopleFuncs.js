const activites = require('../mock/activites');

const addActivite = (newActivite) => {
    activites.push(newActivite);
};

module.exports = {
    addActivite,
};