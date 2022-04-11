//exercicio 1
console.log('--exercicio 1-');
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem Vinda,',info.personagem);

//exercicio 2
console.log('--exercicio 2-');
info['recorrente'] = 'sim';
console.log(info);

//exercicio 3
console.log('--exercicio 3-');
for (let ex3 in info){
    console.log(ex3)
}

//exercicio 4
console.log('--exercicio 4-');
for (let ex4 in info){

    console.log(info[ex4]);

}
//exercicio 5
console.log('--exercicio 5-');
let info2 = {
    personagem2: 'Margarida e Tio Patinhas',
    origem2: 'Pato Donald e Christmas on Bear Mountain, Dell',
    nota2: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
}
console.log(info2)

//exercicio 6
console.log('--exercicio 6-');
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
console.log('O livro favorito de ',leitor.nome ,leitor.sobrenome ,'se chama ' + leitor.livrosFavoritos[0].titulo);

//exercicio 7
console.log('--exercicio 7-');
leitor.livrosFavoritos.push(
{
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)
console.log(leitor);

//exercicio 8
console.log('--exercicio 8-');
console.log(leitor.nome +' '+ leitor.sobrenome + ' tem 2 livros favoritos: '+ leitor.livrosFavoritos[0].titulo + ' ' +leitor.livrosFavoritos[1].titulo);