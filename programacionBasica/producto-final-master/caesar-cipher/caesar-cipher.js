function menu(){
	do{
		var answer = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");
		if(answer != "") {
			if (answer == "1") {
				cipher();
			} else if (answer == "2") {
				decipher();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (answer === "" || (answer !== "1" && answer !== "2"));
}
menu();

function cipher(){
	
	do{
	//Valida que la frase sea string
		var phraseUser = prompt("Ingrese la frase que quiere cifrar");
		var phraseWithoutSpecial = phraseUser.replace(/[^a-zA-Z 0-9.]+/g,' ');
		var phrase = phraseWithoutSpecial.split(" ").join(""); //split separa como en un arreglo por palabra, join string vacio une sin nada entremedio
		if (phrase.length == "" || isNaN(phrase) == false) {
			alert("Debe ingresar una frase");
		}
	} while( phrase == "" || isNaN(phrase) == false);

	var arrayAscii = [];
	for(var i = 0; i < phrase.length; i++) {
		arrayAscii.push(((phrase.charCodeAt(i) - 65 + 33) % 26) + 65);
	}

	var arrayCipher = [];
	for(var i = 0; i < arrayAscii.length; i++) {
		arrayCipher.push(String.fromCharCode(arrayAscii[i]));
	}
	var result = arrayCipher.join("");
	alert("La frase cifrada es: " + result);
}

function decipher(){
	
	do{
	//Valida que la frase sea string
		var phraseUser = prompt("Ingrese la frase que quiere descifrar");
		var phraseWithoutSpecial = phraseUser.replace(/[^a-zA-Z 0-9.]+/g,' ');
		var phrase = phraseWithoutSpecial.split(" ").join(""); //split separa como en un arreglo por palabra, join string vacio une sin nada entremedio
		if (phrase.length == "" || isNaN(phrase) == false) {
			alert("Debe ingresar una frase");
		}
	} while( phrase == "" || isNaN(phrase) == false);

	var arrayAscii = [];
	for(var i = 0; i < phrase.length; i++) {
		arrayAscii.push(((phrase.charCodeAt(i) - 65 -7 + 52) % 26) + 65);
	}

	var arrayDecipher = [];
	for(var i = 0; i < arrayAscii.length; i++) {
		arrayDecipher.push(String.fromCharCode(arrayAscii[i]));
	}
	var result = arrayDecipher.join("");
	alert("La frase descifrada es: " + result);
}