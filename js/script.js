 // Aquí tu código
 //lista-> ul
 //agragar -> boton

 const button = document.getElementById('agregar'); //Llamamos o capturamos al boton (id="agregar")
 const list = document.getElementById('lista');//llamamos al id lista
 
agregar.addEventListener('click', function(){
    const film = prompt('Introduce tus películas favoritas'); //Creamos el prompt, es decir, addEventListener agrega un evento
    const newList = document.createElement('li'); //Se crea un elemento (en este caso una peli) para añadir mas adelante a lalista
    
    newList.textContent = film //Se añade una pelicula a la lista
    list.appendChild(newList); //creamos la lista con todas las pelis.
})

 
//Otra manera de realizar el ejercicio mas generico para que se mas utilizable. 

// function addList () {}

// agregar.addEventListener('click', addList);