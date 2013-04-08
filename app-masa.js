
// Aplicacion de calculo de indice de masa corporal
// ================================================


$(document).ready(function(){
    var button = document.getElementById('calcular-button');
    button.onclick = calcularIMC;
});

function removeClassFromChilds(father, classname){
    // elements = father.children;
    // for (i=0 ; i < elements.length; i++) {
    //     if ( elements[i].className.indexOf(classname) != -1 ){
	   //  elements[i].className = elements[i].className.replace(' '+classname, '');
    //     }
    // }
    father.children().removeClass(classname);
}

function calcularIMC(event){
    
    var rangos = $('#rangos');
    lines = $('#rangos .table-line');
    alto = parseFloat(document.getElementById('input-height').value.replace(',', '.'));
    peso = parseInt(document.getElementById('input-weight').value);

    res = (peso / (Math.pow(alto, 2))).toFixed(1);

    spanres = $('#resultado');
    spanres.text(res.replace('.', ','));

    removeClassFromChilds(rangos, 'active-table-line');

    if (res <= 18.5){
        lines[1].className += ' active-table-line';
    }else if (res < 24.9 && res > 18.5){
        lines[2].className += ' active-table-line';
    }else if (res < 29.9 && res > 25){
        lines[3].className += ' active-table-line';
    }else if (res < 34.9 && res > 30){
        lines[4].className += ' active-table-line';
    }else if (res < 39.9 && res > 35){
        lines[5].className += ' active-table-line';
    }else if (res > 40){
        lines[6].className += ' active-table-line';
    }
    
}



