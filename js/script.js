 // Aquí tu código

 const button = document.getElementById('agregar'); //Llamamos o capturamos al boton (id="agregar")
 const list = document.getElementById('lista');//llamamos al id lista
 
agregar.addEventListener('click', function(){
    const intro = prompt('Introduce tus películas favoritas'); //Creamos el prompt
    const newList = document.createElement('li'); //Se crea un elemento (en este caso una peli) para añadir mas adelante a lalista
    
    newList.textContent = intro //Se añade una pelicula a la lista
    list.appendChild(newList); //creamos la lista con todas las pelis.
})

 

