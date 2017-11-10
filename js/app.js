var personajes = document.querySelectorAll('.personaje');
for (var i = 0; i < personajes.length; i++) {
  personajes[i].addEventListener('click', mostrarInfoPersonaje);    
}
