const fs = require('fs').promises;
const path = require('path');

const MISSION_DATA_PATH = '../mock/activites.json';

const readActivite = async () => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
        const activites = JSON.parse(data);

        return activites;
    } catch (err) {
        return console.log(err);
    }
};

const addActivite = async (newActivite) => {
    try {
        const oldActivities = await readActivite();
        const allActivites = JSON.stringify([...oldActivities, newActivite]);
        await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allActivites);
    } catch (err) {
        return console.log(err);
    }
};

module.exports = {
    readActivite,
    addActivite,
};