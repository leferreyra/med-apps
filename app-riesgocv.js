
// Este archivo contiene la logica principal de dos aplicaciones
// Una calcula el indice de masa corporal de una persona, y la otra
// calcula el riesgo de tener un ataque cardiovascular de una persona.
//
// Ambas aplicaciones fueron desarrolladas por w3bex.com (C)


// Aplicacion de calculo de riesco cardiovascular
// ==============================================


var DATA = new Array();
var RIESGO = new Array();

window.onload = function (){

    // Datos para calcular el riesco cardiovascular
    // ============================================
    
    DATA = {

        "edad" : [
            [-1, -9],
            [0, -4],
            [1, 0],
            [2, 3],
            [3, 6],
            [4, 7],
            [5, 8],
            [6, 8],
            [7, 8],
        ],

        "colesterol-total" : [
            [-3, -2],
            [0, 0],
            [1, 1],
            [2, 1],
            [3, 3],
        ],

        "colesterol-hdl" : [
            [2, 5],
            [1, 2],
            [0, 1],
            [0, 0],
            [-2, -3],
        ],

        "presion-arterial" : [
            [0, -3],
            [0, 0],
            [1, 0],
            [2, 2],
            [3, 3],
        ],

        "diabetes" : [
            [2, 4],
            [0, 0],
        ],

        "fumador" : [
            [2, 2],
            [0, 0],
        ]
    }

    RIESGO = {
        "<-2": ["2", "1"],
	"-1": ["2", "2"],
	"0": ["3", "2"],
	"1": ["3", "2"],
	"2": ["4", "3"],
	"3": ["5", "3"],
	"4": ["7", "4"],
	"5": ["8", "4"],
	"6": ["10", "5"],
	"7": ["13", "6"],
	"8": ["16", "7"],
	"9": ["20", "8"],
	"10": ["25", "10"],
	"11": ["31", "11"],
	"12": ["37", "13"],
	"13": ["45", "15"],
	"14": [">53", "18"],
	"15": [">53", "20"],
	"16": [">53", "24"],
	">17": [">53", ">27"]
    };
    
    // ============================================

    
    var FIELD_OPTIONS = [
        
	['hombre', 'mujer'],
	['30 - 34', '35 - 39','40 - 44', '45 - 49','50 - 54', '55 - 59',
	    '60 - 64', '65 - 69','70 - 74'],
	['<160', '160 - 199', '200 - 239', '240 - 279', '>=280'],
	['<35', '35 - 44', '45 - 99', '50 - 59', '>=60'],
	['<120<br><80', '120 - 129<br>80 - 84',
	    '130 - 139<br>85 - 89','140 - 159<br>90 - 99','>=160<br>>=100'],
	['si', 'no'],
	['si', 'no']
    ]

    var FIELD_IDS = [
        
	'sexo',
	'edad',
	'colesterol-total',
	'colesterol-hdl',
	'presion-arterial',
	'diabetes',
	'fumador'
    ]

    var FIELD_NAMES = [
        
	'Sexo',
	'Edad (años)',
	'Colesterol Total (mg/dl)',
	'Colesterol HDL (mg/dl)',
	'Presión Arterial Sistólica/Diastólica (mm Hg)',
	'Diabetes',
	'Fumador'
    ]

 //    // Insertar elementos en el DOM
 //    var fields = $('#fields');
 //    for (i=0 ; i < FIELD_IDS.length; i++){
        
 //        double_line = '';
 //        if (i==4) { double_line = 'double-line' }
	
	// html = "<div class='line'>";
 //        html+= "<span>"+ FIELD_NAMES[i] +"</span>";
 //        html+= "<div id='"+ FIELD_IDS[i] +"' data-value='' class='choice-widget "+ double_line +"'>";
	// for (j=0 ; j < FIELD_OPTIONS[i].length ; j++){
 //             html+= "<div class='choice'>"+ FIELD_OPTIONS[i][j] +"</div>";
	// }
 //        html+= "</div></div>";

 //    fields.append(html);

	// // Cambiar el ancho de las opciones.
	// var widget = $(FIELD_IDS[i]);
	// var choices = widget.find('.choice');
 //    console.log(choices);
	// widget_width = widget.clientWidth;
	// choice_width = Math.floor(widget_width / choices.length)-1;
	// offset = widget_width - (choice_width * choices.length) - 1;
	// for ( x = 0 ; x < choices.length ; x++) {
	//    if ((x % 2) == 0) { style = 'a'; } else { style = 'b' }
	//    choices[x].style.width = choice_width + 'px';
	//    choices[x].className += ' ' + style;
 //        }
	// choices[choices.length-1].style.width = choice_width + offset;
 //    }

 //    // Agregar Event Handlers
    
 //    var buttons = fields.getElementsByClassName('choice');
 //    for ( n = 0 ; n < buttons.length ; n++ ){
 //        buttons[n].onclick = clickHandler;
 //    }

    var fields = $('#fields');

    $.each(FIELD_IDS, function(i, elem){

        var newline = $('<div></div>');
        newline.addClass('line');

        var newspan = $('<span></span>');
        newspan.text(FIELD_NAMES[i]);

        newline.append(newspan);

        var wdiv= $('<div></div>');
        wdiv.attr('id', elem);
        wdiv.attr('data-value', '-');
        wdiv.addClass('choice-widget');
        if (i==4){ wdiv.addClass('double-line'); }

        newline.append(wdiv);

        $.each(FIELD_OPTIONS[i], function(idx, elelment){

            newchoice = $('<div></div>');
            newchoice.addClass('choice');
            newchoice.html(FIELD_OPTIONS[i][idx]);

            wdiv.append(newchoice);

        });

        fields.append(newline);

        widget = $(elem);
        choices = $("#" + elem + " .choice");

        widget_width = document.getElementById(elem).clientWidth;
        console.log(widget_width);
        choice_width = Math.floor(widget_width / choices.length) - 1;
        offset = widget_width - (choice_width * choices.length) - 1;

        $.each(choices, function(i, c){
            if ((i % 2) == 0) { style = 'a'; } else { style = 'b' }
            c.style.width = choice_width + 'px';
            c.className += ' ' + style;
            choices[choices.length-1].style.width = choice_width + offset;
        });

        choices.click(clickHandler);
    });

}

function clickHandler(event) {

    target = event.target;
    if ($('#sexo').attr('data-value') != '-' || target.parentNode.getAttribute('id') == 'sexo'){
    
         // Manejar el evento click en alguna de las opciones.
         target.parentNode.setAttribute('data-value', elementIndexOf(target ,target.parentNode.children));
         removeClassFromChilds($('#'+target.parentNode.getAttribute('id')), 'active');
         target.className += ' active';

	 // Actualizar el resultado
	 updateResult();

    } else {
         
	 alert('Para ver el resultado debe seleccionar primero el sexo');

    }
    
}

function elementIndexOf(item, father){

    var i = 0;
    while( (item = item.previousSibling) != null ) 
      i++;
    
    return i;
}

function removeClassFromChilds(father, classname){
    // elements = father.children;
    // for (i=0 ; i < elements.length; i++) {
    //     if ( elements[i].className.indexOf(classname) != -1 ){
       //  elements[i].className = elements[i].className.replace(' '+classname, '');
    //     }
    // }
    father.children().removeClass(classname);
}


function updateResult(){
    
    var fields = $('#fields');
    points = 0;
    var sexo = Number(document.getElementById('sexo').getAttribute('data-value'));

    for ( i=1 ; i < $('.choice-widget').length ; i++ ){

        field = fields.find('.choice-widget')[i];
        console.log('alsdjkf: ' + field.getAttribute('data-value'));

        if( field.getAttribute('data-value') != "-"){

    	    field_id = field.getAttribute('id');
    	    field_value = Number(field.getAttribute('data-value'));
            // console.log('Llamando a: DATA[' +field_id+ '][' +field_value+ '][' +sexo+ ']' );
    	    points += DATA[field_id][field_value][sexo];
            // console.log('points: ' + points);
    	}

    }

    if ( points <= -2  ) {
        str_points = '<-2';
    }else if ( points >= 17 ){
        str_points = '>17';
    }else{
        str_points = String(points);
    }

    console.log('pointes: ' + points);
    console.log('str_points: ' + str_points + ' is a: '+ typeof(str_points));
    console.log('sexo: ' + sexo + ' is a: '+ typeof(sexo));
    console.log('Llamando a: RIESGO[' +str_points+ '][' +sexo+ ']' );
    var result = RIESGO[str_points][sexo];

    // Actualizar barra de porcentaje
    barrawid = $('#result');
    if ( result == '>53' ) {
       progress = '55%';
    } else if ( result == '>27' ) {
       progress = '30%';
    } else {
       progress = result + '%';
    }

    console.log('progress: ' + progress);
    console.log('result: ' + result);

    fill = barrawid.find('.fill')[0].style.width = progress;
    barrawid.find('span')[0].innerText = result + '%';
}


