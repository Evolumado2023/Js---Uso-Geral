console.log('OLá mundo!');

function soma(x, y) {
    return x + y;
}

const x = function(a, b) {
    return a * b;
}

console.log('O resultado da operação é: ' + soma(3, 5));
console.log('O resultado da operação é: ' + x(3, 5));

console.log('\n');



/******************************************************/
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// adicionando os 3 pontos, ele imprime apenas os números do array
console.log(...arr);

// imprimindo uma posição do array
console.log(arr[2]);


console.log('\n');


/******************************************************/
const name = "Seu nome é Darlison Silva";
for (let i = 0; i < 10; i++){

    // uso isso para imprimir o valor da variável name;
    console.log(name, i);

    // uso isso para imprimir os números de
    //console.log(i);
}

console.log('\n');


/******************************************************/
let a = 0;
while (a < 20) {
    console.log('O valor while é: ' + a);
    a+= 2;
}


console.log('\n');


/******************************************************/
var arrow = function(a, b, c) {
    return (a + b)/c;
}

console.log('O valor do arrow function é: ' + arrow(20, 10, 5));


console.log('\n');


/******************************************************/
function myArr (t, n) {
    return t * n;
}

console.log('O valor da função é: ' + myArr(10, 4));


console.log('\n');


/******************************************************/
const person = {
    nome: 'Darlison',
    idade: 25,
    profissao: 'Programador FullStack',
}

console.table(person);
console.log('NOME: ' + person.nome);
console.log('IDADE: ' + person.idade);
console.log('PRPFISSÃO: ' + person.profissao);

if (person.profissao === 'Programador FullStack') {
    console.log('Você é programador!!!');
} else {
    console.log('NADA CONSTA');
}