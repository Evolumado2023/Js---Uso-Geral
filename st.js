/** Estilos com javascript */
const div = document.querySelector('.calculadora');
const label1 = document.querySelector('.lab1');
const label2 = document.querySelector('.lab2');
const btn = document.querySelector('.btnSomar')
const h2 = document.querySelector('h2');
const resp = document.querySelector('.resp');
const input1 = document.querySelector('.num1');
const input2 = document.querySelector('.num2');

h2.style.color = 'blue';
h2.style.textAlign = 'center';

const styleGeral = {
    width: '300px',
    margin: '50px auto',
    fontSize: '20pt',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color: 'red'
}
Object.assign(div.style, styleGeral); // estilo da div


const styleBtn = {
    width :'100%',
    padding: '10px',
    marginTop: '1em',
    boxSizing: 'border-box'
}
Object.assign(btn.style, styleBtn);


const resposta = {
    marginTop: '1.5em',
    fontSize: '20pt',
    color: 'blue',
    textAlign: 'center'
}
Object.assign(resp.style, resposta);


const inp = {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    boxSizing: 'border-box',
    fontSize: '18pt'
}
Object.assign(input1.style, inp);
Object.assign(input2.style, inp);


const lb = {
    display: 'block',
    marginTop: '10px',
    fontSize: '20pt',
    color: '#555'
}
Object.assign(label1.style, lb);
Object.assign(label2.style, lb);