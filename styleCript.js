
function somar() {
    const num1 = parseFloat(document.querySelector('.num1').value); 
    const num2 = parseFloat(document.querySelector('.num2').value);
    const resp = document.querySelector('.resp');

    const soma = num1 + num2;

    resp.innerText = `o valor da soma é ${soma}`;
}
