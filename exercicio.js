
const funcCoin = () => {
    const url = `https://api.coincap.io/v2/assets`;
    const list = document.getElementById("divC");
    const promiseLis = fetch(url)
        .then((elm) => elm.json())
        .then((elm) => elm.data)
        .catch((err) => {
            list.innerHTML = `Falha conecção servidor!`;
            console.log(err);
        });
    return promiseLis;
};

const funcAddCoin = async () => {
    const list = document.getElementById("divC");
    const coinList = await funcCoin();
    
    const listCompletCoin = coinList.filter((elm) => elm.rank <= 10);
    
    listCompletCoin.forEach((elm) => {
        const line = document.createElement('li');
        line.classList.add('lisCoin');
        line.innerText = `${elm.id} (${elm.symbol}): ${elm.priceUsd}`;

        list.appendChild(line);
    });

}

const butão = document.getElementById("btn");
butão.addEventListener('click', funcAddCoin);
