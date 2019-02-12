
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
  
  nuevoTablero.style= "display:block; float:right; margin-left:5 5px"


    /* Lo primero que hago es guardar la variable en el 
  contenedor de posteos que está vacío en el html  */
     //obtener el input antes del valor que no he declarado
    var nuevaLista = document.getElementById("anadido");
   
    //tenemos que tomar el texto ingresado en el input
    var listaAgregada = document.getElementById("anadido").value;

    //limpiar el textarea
    document.getElementById("anadido").value = "";
    
    // indicar el div donde irá nueva Lista
    var contenedorLista = document.getElementById("nuevaLista");
    //darle estilo al div que contiene nueva lista
    contenedorLista.style ="width:180px; height:40px; padding:1px"
    
    //creo nuevo div
    var userParrafo = document.createElement("div");
     // crear elemento p    
    var elementoParrafo = document.createElement ("p");

    elementoParrafo.setAttribute("id", "tituloLista")
    
    //variable de link con text Node
     var textoLink = document.createTextNode(listaAgregada);

     // creo elemento link
     var linkParrafo = document.createElement ("a");
    
     linkParrafo.setAttribute("href", "#");
     linkParrafo.setAttribute("id", "agregar");

     var contenidoLista = document.createTextNode("Añadir una tarea");

     //UserParrafoNodo es la creación del div, se le agrega el nodo texto listaAgregada
    var userParrafoNodo = document.createTextNode(listaAgregada);
 
    // padres para hijos
     
    //Del más pequeño al más grande
    linkParrafo.appendChild(contenidoLista);


    userParrafo.appendChild(textoLink);

    // ingresar en div que esta sin nada
    userParrafo.appendChild(elementoParrafo);


     // a elemento contenedorLista se le agrega el hijo div creado
    contenedorLista.appendChild(userParrafo);
    //
     

    // a elemento div se le agrega el hijo nodo texto
    elementoParrafo.appendChild(linkParrafo);

   

    agregar.addEventListener("click", function(){
        // creando text area y form
        var form = document.createElement("form");
        form.setAttribute("id", "nuevoFormulario");
        form.style ="background-color:#B6B7BB;"
        var area = document.createElement("textarea");
        area.style ="background-color:white; display:block; width:175px; border-radius:5px; border:none; height:20px"
        // creando boton 
        var boton= document.createElement("button");
        var textoBoton = document.createTextNode ("Añadir");
      
        boton.style = "background-color: #52B653; color:white; font-weight:bold; padding: 3%; border:none; width: 30%; border-radius:5px;"
        userParrafo.appendChild(form);
        userParrafo.appendChild(area);
        boton.appendChild(textoBoton);
        userParrafo.appendChild(boton);



    })

})
   


