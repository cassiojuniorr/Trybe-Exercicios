const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getPar = (array) => array % 2 === 0;

const sumPar = (num1, num2) => {
    return num1 + num2;
};

const arrayFilter = (element) => { 
    return element.filter(getPar).reduce(sumPar, 0);
};
console.log(arrayFilter(numbers));

