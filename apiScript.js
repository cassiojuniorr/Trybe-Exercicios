// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  let chaText = document.getElementById('ph1');
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      chaText.innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();