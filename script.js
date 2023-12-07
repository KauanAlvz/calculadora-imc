function calcImc() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const imc = (peso / (altura * altura)).toFixed(1);

    document.getElementById('resposta').innerHTML = imc + ', ' + classificacao(imc);
}

function classificacao(imc){
    if(imc < 18.5){
        return 'magreza';
    }
    if(imc >= 18.5 && imc <= 24.9){
        return 'normal'; 
    }
    if(imc >= 25 && imc <= 29.9){
        return 'obesidade I'; 
    }
    if(imc >= 30 && imc <= 39.9){
        return 'obesidade II'; 
    }
    if(imc >= 40){
        return 'obesidade III'; 
    }
}