function calcImc(){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = (peso / (altura * altura)).toFixed(1);

    document.querySelector('#resposta').innerHTML = imc;
}
