function Cascade () {
	var valueDrop = $('#realizar').val();
	var dropdown = $('#dirigido');

	if(valueDrop == 0){
		dropdown.empty();
	}
	if(valueDrop == 1){
		dropdown.empty();
		dropdown.append("<option value='1'>Redes Sociales</option>");
		dropdown.append("<option value='1'>Web</option>");
		dropdown.append("<option value='1'>Uso Interno</option>");
		dropdown.append("<option value='1'>TV</option>");
		dropdown.append("<option value='1'>Evento</option>");
		dropdown.append("<option value='1'>Capacitación</option>");
	}
    if(valueDrop == 2){
		dropdown.empty();
		dropdown.append("<option value='1'>Salud</option>");
		dropdown.append("<option value='1'>Hotel</option>");
		dropdown.append("<option value='1'>Educacion</option>");
		dropdown.append("<option value='1'>Comercio</option>");
		dropdown.append("<option value='1'>Banco</option>");
		dropdown.append("<option value='1'>Eventos</option>");
		dropdown.append("<option value='1'>Restaurantes</option>");
	}
	if(valueDrop == 3){
		dropdown.empty();
		dropdown.append("<option value='1'>Redes Sociales</option>");
		dropdown.append("<option value='1'>Newsletter</option>");
		dropdown.append("<option value='1'>Páginas Web</option>");
		
	}

	
}