const getPlanet = () => {
    const mars = {
        name: "Mars",
        distanceFromSun : {
            value: 2279,
            measurementUnit: "Kilometers",
        },
    };
    console.log("Returned planet: ", mars);
};

//setTimeout(() => getPlanet(), 4000);

const menssageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (temp) => (temp * 9/5) + 32;

const tempInFahrenheit = (fah) => {
    console.log(`It is currently ${toFahrenheit(fah)}°F at Mars`);
};

const tempInCel = (cel) => {
    console.log(`Hi there! Curiosity here. Right now is ${cel}°C at Mars`);
};

const sendMarsTemperature = (callback) => {
    return callback(getMarsTemperature());
};

setTimeout(() => sendMarsTemperature(tempInFahrenheit), menssageDelay());
setTimeout(() => sendMarsTemperature(tempInCel), menssageDelay());