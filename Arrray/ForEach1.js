const aprovados = ['Agatha','Aldo', 'Carlos', 'Nicole' ];

// No ForEach sempre vamos ter 3 valores que puxamos do array
// sendo o 1 item o valor do index, 2 o index e 3 o array. 
// sendo assim 'Agatha', 0 , ['Agatha','Aldo', 'Carlos', 'Nicole' ]



aprovados.forEach(function(nome,indece) {
    console.log(`${indece + 1}, ${nome}`)
}); 

/* No For Each passamos uma Callback que vai ser chamada a cada novo elemento
,ou seja, a cada passada de iten, no exemplo estamos usando 2 parametros, no qual 
1 é o nome e outro o index, dentro da nossa função de retorno (callback) imprimimos 
no console. Isso ocorre em todos os elementos do array, um por vez.
*/
console.log('==============================')
aprovados.forEach(nome => console.log(nome))

console.log('==============================')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

console.log('==============================')

aprovados.forEach( (nome,index,array) => {
    console.log(`${index} -> ${nome} `)
    console.log(`Lista -> ${array}`)
 })