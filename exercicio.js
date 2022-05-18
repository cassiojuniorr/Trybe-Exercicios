const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
  
function flatten(array) {
    return array.reduce((arr, val) => {
        return `${arr} ${val}`;
    }, '');
};
console.log('1: ', flatten(arrays));

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];

function reduceNames(array) {
    return array.reduce((arr, val) => {
        return arr += ', ' + val.author.name;
    }, '');
};

/* const juntaNumbers = (arr, val) => {
    return arr += ', ' + val.author.name;
};

function reduceNames(array) {
    return array.reduce(juntaNumbers, '');
}; */
console.log('2: ', reduceNames(books));

function averageAge(array) {
    let tamanho = array.length;
    const takeAge = array.reduce((arr, val,) => {
        return arr += (val.releaseYear - val.author.birthYear);
    }, 0);
    return takeAge/tamanho;
};
console.log('3: ', averageAge(books));

function longestNamedBook(array) {
    return array.reduce((arr, val) => {
        if(arr.length < val.name){
            arr = val;
        }
        return arr;
    },);
};
console.log('4: ', longestNamedBook(books));

function containsA() {
    
};
console.log('5: ', containsA(books));