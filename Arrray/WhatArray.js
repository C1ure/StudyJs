console.log(typeof Array, typeof new Array, typeof []);

let Aprovados = new Array('Nicole','Carlos','Iure');
console.log(Aprovados)

Aprovados = ['Nicole', 'Carlos', 'Iure'];


// Array semrpe começa no indece 0
// Sempre que for consutar usar o "simbolo" do array e o index da consulta []
console.log(Aprovados[0]);
console.log(Aprovados[1]);
console.log(Aprovados[2]);
console.log(Aprovados[3]);

//Colocando um item em um determinado index
Aprovados[3] = 'Gordiano';

// adiciona um item na ultima posição do array disponivel 
Aprovados.push('Santos')
console.log(Aprovados.length)
// aqui temos 5 itens dentro do array, nisso temos 4 index nele 0 - 1 - 2 - 3 - 4

console.log(Aprovados);

// caso eu coloque um item avulso, com o index longe
// todos as casas anteriores seram undefined (Até receberem um valor)
Aprovados[9] = 'Bortolato';
console.log(Aprovados.length)
console.log(Aprovados)

// podemos verificar que temos os index 5 - 6 - 7 - 8 vazios (undefined)
console.log(Aprovados[8] === undefined)

console.log('===========================')
// ALTERAL O ARRAY ORIGINAL

Aprovados.sort();
//Funcition interna de ordenação
console.log(Aprovados);
// Organizou o array em ordem alfabetica

let Numeros = [1,22,3,4,34,12,0];
Numeros.sort();
console.log(Numeros);
// ou em ordem crescente, é um organizador

console.log('===========================');
// Deleção de Itens 

delete Aprovados[1];
//Aqui estamos deletando a informação do index, ou seja, 
// no index 1 ele vai tirar o valor e colocar undefined,
// sem organizar ou mexer no array 
console.log(Aprovados[1]);

let aprovados = ['Bia', 'Alana', 'Ana']
aprovados.splice(1, 1)
// aqui estamos chamando uma função onde o 1 valor é o index,
// e o segundo valor é quantos itens eu quero excluir ,ou seja,
// .splice(1,1) selecione o index 1 e delete somente 1 iten no 
// exemplo seria Alana.

// O splice faz a deleção de fato do iten modificando o array 
console.log(aprovados)

// exemplo 2 
aprovados = ['Bia', 'Alana', 'Ana']
aprovados.splice(1, 2)
// aqui ele removeu Alana e Ana, pois foi selecionado o index 1 
// e excluido 2 itens apartir dele
console.log(aprovados) 

//exemplo 3
console.log('===========================');

aprovados = ['Bia', 'Alana', 'Ana'];
aprovados.splice(1, 2, 'Fulano', 'Ciclano ');
// aqui ele removeu Alana e Ana apos isso 
// foi colocado os valores que queriamos subistituir.
console.log(aprovados) ;

console.log('===========================');
aprovados = ['Bia', 'Alana', 'Ana'];
aprovados.splice(1, 0, 'Fulano', 'Ciclano', 'Joao');
// aqui adicionou os itens que queriamos no index desejado, 
// e 'empurrou' o restante do array para apois a adição.

console.log(aprovados) ;