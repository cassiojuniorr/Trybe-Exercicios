const next = 'NEXT_COLOR';
const color = 'PREVIOUS_COLOR';
const acRandow = 'RANDOW_ACC';

const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
};

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case acRandow:
            return {
                ...state,
                colors: [...state.colors, criarCor()],
                index: state.colors.length,
            };

        case next:
            return {
                ...state,
                index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
            };

        case color:
            return {
                ...state,
                index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
            };

        default:
            return state;
    }
};

const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const btnPrev = document.getElementById('previous');
btnPrev.addEventListener('click' , () => {
    store.dispatch({ type: color })
});

const btnNext = document.getElementById('next');
btnNext.addEventListener('click' , () => {
    store.dispatch({ type: next })
});

store.subscribe(() => {
    const colorName = document.getElementById('value');
    const backGround = document.getElementById('container');
    const stateA = store.getState();
    colorName.innerHTML = stateA.colors[stateA.index];
    backGround.style.background = stateA.colors[stateA.index];
})

const btnRandom = document.querySelector('#random');
btnRandom.addEventListener('click', () =>  {
    store.dispatch({ type : acRandow });
});