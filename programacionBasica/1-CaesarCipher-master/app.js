function caesarCipher (cipher){
	do{
		//Al ser do while al menos se ejecutará una vez el prompt, por ello realizamos la pregunta
		var respuesta = prompt ("Bienvenido (a) a nuestro sitio, por favor indícanos si quieres Cifrar o Descifrar \n 1: Cifrar \n 2: Descifrar");
			//Se comienza diciendo que el if debe ser distinto de vacio
			
			if (respuesta ==""){
				alert ("ingresaste un campo vacío debes ingresar opción 1 o 2");
			}
			
			 	if (respuesta == "1"){
					cipher();
					//Si el if es 2 descifrar
				} else if  (respuesta == "2"){
					decipher();
					//Si no es ninguna de las opciones anteriores ocurre lo de abajo
				} else {
					alert("Ingrese una opción válida");
				}
			}

		while (respuesta == "" || respuesta == "1" && respuesta == "2"){

		}




		function cipher(){
			//Preguntar por la frase a descifrar
			var frase = prompt("Ingresa una frase");

			//Si respuesta es distinta a Expresión regular para asegurar que no metan números 

			if (respuesta === /^[a-zA-Z]*$/){
				alert ("ingresa letras válidas");
			}
			
			//introducir un string vacio
			var nuevaFrase = "";
			//para introducir frase en la respuesta
			var nuevaFrase = respuesta;
			//ingresamos un for para que recorra los espacios como números
			for (var i=0; i < 26; i++){
				//como parar en el largo de la palabra para obtener el índice final ? y a ello sumarle 33 espacios
				if (frase [i] == "") {// el índice es un espacio y devolverá un espacio
					respuesta =  nuevaFrase + "";
					} else {

						var letra = frase.charCodeAt(i) //devuelve un número ASCII o Unicode del carácter en el índice proporcionado
						letra = (letra - 65 + 33)% 26 + 65;// cifrar el índice ASCII con fórmula

						nuevaFrase = nuevaFrase + String.fromCharCode(letra); // Pasar letra a ASCII
					}


			}

alert ("Tu texto cifrado se ve así \n \n "+ nuevaFrase)


	}



		function decipher(){
			//Preguntar por la frase a descifrar
			var frase = prompt("Ingresa una frase");

			//Si respuesta es distinta a Expresión regular para asegurar que no metan números 

			if (respuesta === /^[a-zA-Z]*$/){
				alert ("ingresa letras válidas");
			}
			
			//introducir un string vacio
			var nuevaFrase = "";
			//para introducir frase en la respuesta
			var nuevaFrase = respuesta;
			
			//ingresamos un for para que recorra los espacios como números
			for (var i=0; i < 65; i++){
				
				if (frase [i] == "") {// el índice es un espacio y devolverá un espacio
					respuesta =  nuevaFrase + "";
					} else {

						var letra = frase.charCodeAt(i) //devuelve un número ASCII o Unicode del carácter en el índice proporcionado
						letra = (letra - 65 - 7 + 52)% 26 + 65;// cifrar el índice ASCII con fórmula

						nuevaFrase = nuevaFrase + String.fromCharCode(letra); // Pasar letra a ASCII
					}


			}

alert ("Tu texto descifrado se ve así \n \n " + nuevaFrase)


	}


}

caesarCipher()
