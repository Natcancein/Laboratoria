
var tablero = document.getElementById("lista");

tablero.addEventListener("click", function(){

  /*ocultando boton 'añadir una lista...'*/
    document.getElementById("lista").style.display="none";
    document.getElementById("form").style.display = "block";
    var nuevoTablero = document.getElementById("form");
    /*mostrando input para agregar tableros*/
    nuevoTablero.style.display = "block";

});

/*002 ACTIVANDO BOTÓN PARA AÑADIR LISTA, COLOCAR TABLERO AL LADO Y MOSTRAR
 AÑADIR: TEXTO ARRIBA INPUT*/


 var nuevoTablero = document.getElementById("form");
 var boton = document.getElementById("comentar");


  boton.addEventListener("click", function(){
  //Ubicando el tablero al lado 
  nuevoTablero.style= "display:block; float:left; margin-left:5px"

    /* Lo primero que hago es guardar la variable en el 
  contenedor de posteos que está vacío en el html  */
     //obtener el input antes del valor que no he declarado
    var nuevaLista = document.getElementById("anadido");
   
    //tenemos que tomar el texto ingresado en el input
    var listaAgregada = document.getElementById("anadido").value;

    //limpiar el textarea
    document.getElementById("anadido").value = "";
    
    // indicar el div donde irá nueva Lista
    var contenedorLista = document.getElementById("anadirLista");

    //creo nuevo div
    var userParrafo = document.createElement("div");

    userParrafo.classList.add("nuevaLista");
     // crear elemento p    
    var elementoParrafo = document.createElement ("p");
    elementoParrafo.setAttribute("class", "tituloLista");
    
    //variable de link con text Node
     var textoLink = document.createTextNode(listaAgregada);

     // creo elemento link
     var linkParrafo = document.createElement ("a");
    
     linkParrafo.setAttribute("href", "#");
     linkParrafo.setAttribute("id", "agregar");

     var contenidoLista = document.createTextNode("Añadir una tarea");

     //UserParrafoNodo es la creación del div, se le agrega el nodo texto listaAgregada
    var userParrafoNodo = document.createTextNode(listaAgregada);
     
    //Del más pequeño al más grande
    linkParrafo.appendChild(contenidoLista);
    elementoParrafo.appendChild(textoLink);
    // ingresar en div que esta sin nada
    userParrafo.appendChild(elementoParrafo);
     
    // insertar antes
    contenedorLista.insertBefore(userParrafo, nuevoTablero);
    
    // a elemento div se le agrega el hijo nodo texto
    elementoParrafo.appendChild(linkParrafo);


    var linkAgregar = document.querySelector("#agregar");

linkAgregar.addEventListener("click", function(){

var textArea = document.createElement("textarea");
var button = document.createElement("button");
button.style="background-color: #52B653;color: white;border: none;margin-top: 5%;padding: 3%;width: 35%;font-weight: bolder; border-radius: 5px;"

userParrafo.appendChild(textArea);
userParrafo.appendChild(button);
button.innerText="agregar";
});


})

