function isValidCard(){
	do{
		var card = prompt('Ingrese número de la tarjeta de crédito');
		if(card == "") {
			alert("Debe ingresar un número"); //valido que ingrese algo
		}
	} while (card === "" );
	var cardArray = [];

	for (var i = card.length - 1; i >= 0; i--) { //for desde el último elemento, hasta que llegue a 0 y va decrementando
		//console.log(card[i]);
		cardArray.push(parseInt(card[i])); //pushea los números ingresados de la tarjeta al inverso
	}

	var sum = 0; //inicializo la variable para guardar el resultado de la suma
	var result;

	for (var j = 0; j < cardArray.length; j++) { //recorre el array inverso
		if (j % 2 !== 0) { //si la posición en la que está es número par
			result = cardArray[j] * 2; //entonces su valor lo multiplico por 2 y lo guardo en result temporalmente ej: result = cardArray[6]* 2 --> result = 12;

			if (result > 9) { //si ese valor temporal es mayor a 9 (result = 12)
				result = (result % 10) + 1;//(result % 10) + parseInt(result/10);
				//entonces aplico el algoritmo de lhun (12%10) + parseInt(12/10) --> result = 3
			}
			sum = sum + result; //una vez separados los va sumando
			
		} else {
			sum = sum + cardArray[j]; //suma el resultado guardado en el if anterior + el de cada posición impar
		}
	}

	(sum % 10 === 0) ? alert("La tarjeta ingresada es válida") : alert("La tarjeta ingresada no es válida");
	//operador ternario de comparación
}
isValidCard();


//numero tarjeta válida 3625102593804