function calcular(e){

    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;

    let imc = (peso / (altura * altura)).toFixed(2)

    document.querySelector('h3').innerHTML = `IMC: ${imc} <br> Classificação de IMC: <br> ${condicoes(imc)}`;

    e.preventDefault()
};

function condicoes(imc){
    if(imc <= 18.5){
        return 'Você está abaixo do peso 😯';
    }
    else if(imc >= 18.6 && imc <= 24.9){
        return 'Peso ideal (Parabéns)😎';
    }
    else if(imc >= 25.0 && imc <= 29.9){
        return 'Levemente acima do peso🤨';
    }
    else if(imc >= 30.0 && imc <= 34.9){
        return 'Obesidade gra I🫣';
    }
    else if(imc >= 35.0 && imc <= 39.9){
        return 'Obesidade grau II (Severa)😰';
    }
    else{
        return 'Obesidade III (Mórbida)😱';
    }

};
