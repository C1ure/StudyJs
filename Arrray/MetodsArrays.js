const pilotos = ['Vettel','Alonso','Raikkonen','Massa'];

pilotos.pop() // Massa quebrou o carro 
// Remove o ultimo elemento do array 
console.log(pilotos);

pilotos.push('Verstappen')
//Adiciona o item nos parenteses como ultimo elemento do array 
console.log(pilotos);

pilotos.shift() 
// .pop inverso -> remove o primeiro elemento do array 
console.log(pilotos);

pilotos.unshift('Hamilton')
// Adiciona o item nos parenteses como 1 elemento do array ( index 0 )
console.log(pilotos);

// Splice pode adicionar e remover elementos

// Adicionar 
pilotos.splice( 2, 0, 'Bottas', 'Massa')
     // 'indice', remover, adicionar

console.log(pilotos);

// Remover 

pilotos.splice(3,1) //removendo 1 iten no index 3, 
// se eu colocasse 2 (a ser removido ), removeria index 3 e 4
console.log(pilotos);

// Pegando uma parte do Array //

const algunsPilotos1 = pilotos.slice(2) 
// Retorna um novo array, passamos para ele qual o index deve começar esse novo array 
// no caso ele vai criar um array novo a partir do index 2 
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4) 
// Retorna um novo array, passamos para ele qual o index deve começar esse novo array 
// no caso ele vai criar um array novo a partir do index 1 e terminar no index 3 
// ou seja, ele sempre vai terminar em um index anterior !!!! 
console.log(algunsPilotos2);