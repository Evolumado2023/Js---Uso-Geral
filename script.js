const h1 = document.querySelector('h1');
h1.innerText = 'Texto inserido via Javascript';

const ul = document.querySelector('ul');
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const profissao = document.querySelector('#profissao');


/* aplicando estilos no bloco ul. Essa forma é mais indicada quando poucos estilos forem aplicados ******

ul.style.color = 'red';
ul.style.padding = '10px';
ul.style.textDecoration = 'none';
ul.style.listStyle = 'none';
ul.style.fontSize = '20pt';

*****/


/* Outra forma de aplicar estilos com javascript. É mais indicado quando a quantidade de estilos aplicados
a um código, for maior.   ******/
const st  = {
    color: 'red',
    fontSize: '20pt',
    listStyle: 'none',

}
Object.assign(ul.style, st);


nome.innerHTML = 'Darlison Silva';
idade.innerText = '25';
profissao.innerText = 'Engenheiro de Software';



/****************************************************************************/
const p1 = document.querySelector('p');
const cont = p1.innerText;
console.log(cont);



