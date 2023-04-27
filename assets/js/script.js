$(document).ready(function(){
   // Agregar desplazamiento suave a todos los enlaces
    $("a").on('click', function(event) {

        // Asegúrese de que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {
            // Evitar el comportamiento de clic de anclaje predeterminado
            event.preventDefault();

            // Almacenar hash
            var prueba = this.hash;

            // Usando el método animate() de jQuery para agregar desplazamiento de página suave
            // El número opcional (800) especifica el número de milisegundos que se tarda en desplazarse al área especificada
            $('html, body').animate({
                scrollTop: $(prueba).offset().top
            }, 800, function(){
    
                // Agregue hash (#) a la URL cuando termine de desplazarse (comportamiento de clic predeterminado)
                window.location.hash = prueba;
            });
        } // End if
        // Script extraido desde w3school
    });
});