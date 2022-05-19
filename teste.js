// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'limão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['celular', 'computador', 'headset'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

