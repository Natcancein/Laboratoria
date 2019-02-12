//Versión 0.0.1

let btn = document.querySelector("button");
let form=document.querySelector("textarea");
let text=form.value;

btn.addEventListener("click",post);

function post(){
	
    //form.value="";
	let main = document.querySelector("main");

	let newDiv=document.createElement("div");
	let newText=document.createTextNode(form.value);

	newDiv.style.backgroundColor="white";
	newDiv.style.width="80%";
	newDiv.style.margin="auto";
	newDiv.style.marginTop="30px";

	newDiv.appendChild(newText);
	main.appendChild(newDiv);

	


    var d = new Date();
    
    let newDiv2=document.createElement("div");
    newDiv2.innerText = "Esto se posteó a esta hora: " +d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
    newDiv.appendChild(newDiv2);

}

//Versión 0.0.2

/*if(text==""){
	btn.removeEventListener("click", post);
}
*/

form.addEventListener("keyup", count);


function count(e){

 //tenemos que tomar el valor del texto ingresado en el text area
let text = form.value;
 //poner el limite inicial del text Area
let limit = document.querySelector(".number");

let count = 140 - text.length;
limit.innerText = "" + (count); 


//Versión 0.0.3

 if (count == 0) {
          alert("llegaste al límite");
          //deshabilitar boton
         // btn.disabled = true;
    } else if (count <=  10) {
        
        limit.style = "color : red";

     } else if (count <=  20) {
        
        limit.style = "color : purple";

     }


//Versión 0.0.4

var i = 1;
if (e.keyCode===13){
 el=this; 
 el.style.cssText = 'height:' + el.scrollHeight + 'px';
}


}

// Versión 0.0.5 (Extra) , aun incompleto
/*
form.addEventListener("scroll", scroll);

function scroll(e){
	form.style.cssText = 'overflow-y:' + 'visible';
	console.log(e);
}
*/
