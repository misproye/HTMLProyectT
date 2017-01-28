

function valida(a) {
	// body...

	tecla = (document.all) ? a.keyCode : a.which;

	//tecla de retroceso para borrar, siempre permitirla

	if (tecla == 8) {

		return true;
	}

	//patron de entrada para solo aceptar numeros
	patron =/[0-9]/;
	tecla_final = String.fromCharCode(tecla);
	return patron.test(tecla_final);
}





