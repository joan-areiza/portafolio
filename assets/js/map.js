document.addEventListener("DOMContentLoaded", (event) => { // addEventListener registra un "escuchador" que espera a que ocurra un evento; "DOMContentLoaded" es un evento del navegador que se dispara cuando el HTML ya terminó de cargarse y de interpretarse (sin esperar imágenes ni estilos); (event) => {...} es una función flecha que se ejecuta en ese momento, recibiendo información del evento en el parámetro "event"



    setTimeout(() => { // setTimeout programa una función para que se ejecute después de un tiempo de espera; la función flecha () => {...} es el código que correrá una vez pase ese tiempo, que se indica al final de la línea 10
        document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrollling="no" marginheight="0"
                                marginwidth="0" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.9920227225704!2d-76.58726155577142!3d2.458349280891626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30039b04245a67%3A0xa8bdda6eb25a396e!2sParque%20Yambitar%C3%A1!5e0!3m2!1ses!2sco!4v1787064794024!5m2!1ses!2sco">
                                </iframe>
    ` // Cierra el template string que se abrió unas líneas más arriba
        //document.querySelector busca el elemento que coincida con el selector indicado; "#load-iframe-map" busca el elemento cuyo id es "load-iframe-map" (el div vacío del archivo contacto.html); innerHTML reemplaza todo el contenido de ese elemento por el texto HTML que sigue entre comillas invertidas (template string)--> 
        // iframe inserta otra página web dentro de la página actual, en este caso un mapa de Google Maps; class le da estilo desde el CSS; frameborder="0" quita el borde alrededor del recuadro (atributo antiguo de HTML); scrollling="no" tiene un error de escritura (tres "l" en vez de dos), por lo que este atributo no funciona como se esperaba, aunque de todas formas ya está en desuso en HTML moderno; marginheight="0" quita el margen vertical (también un atributo antiguo) 
        // marginwidth="0" quita el margen horizontal (atributo antiguo, igual que marginheight); loading="lazy" le dice al navegador que retrase la carga del iframe hasta que esté a punto de hacerse visible en pantalla, mejorando la velocidad inicial de carga de la página; referrerpolicy controla cuánta información de la URL de esta página se envía a Google Maps al pedir el mapa, "strict-origin-when-cross-origin" es un valor por defecto pensado para cuidar la privacidad 
        // src indica la URL de la página que se va a mostrar dentro del iframe; esta URL tan larga la genera la función "compartir/insertar mapa" de Google Maps, y codifica la ubicación exacta, el zoom y el ángulo de vista del mapa (en este caso, "Parque Yambitará") 

    }, 500) // 500 es el tiempo de espera en milisegundos (medio segundo) que setTimeout deja pasar antes de ejecutar la función; el paréntesis final cierra la llamada a setTimeout

}) // Cierra la función flecha y la llamada a addEventListener abierta en la primera línea