// Texto por defecto del visor
const TEXTO_INICIAL = "Pasa el ratón o enfoca una imagen de abajo para mostrarla aquí.";

/**
 * Actualiza el fondo y el texto del visor principal con la imagen seleccionada.
 * Se activa con onmouseover y onfocus.
 * @param {HTMLImageElement} imagenPrevia - El elemento <img> que disparó el evento.
 */
function actualizarVisor(imagenPrevia) {
    console.log("Evento activado sobre:", imagenPrevia.alt);

    const visor = document.getElementById("visor");
    
    // Cambia el texto al atributo alt de la imagen
    visor.innerHTML = imagenPrevia.alt;
    
    // Cambia la imagen de fondo usando la ruta src de la miniatura
    visor.style.backgroundImage = `url('${imagenPrevia.src}')`;
}

/**
 * Restaura el visor a su estado original cuando el cursor sale o se pierde el foco.
 * Se activa con onmouseleave y onblur.
 */
function restaurarVisor() {
    console.log("Restaurando visor a su estado inicial.");

    const visor = document.getElementById("visor");
    
    // Elimina la imagen de fondo y restaura el texto original
    visor.style.backgroundImage = "url('')";
    visor.innerHTML = TEXTO_INICIAL;
}

/**
 * Se ejecuta al cargar la página (onload).
 * Recorre todas las imágenes de la galería y les asigna tabindex="0" automáticamente
 * para permitir la navegación mediante teclado.
 */
function inicializarGaleria() {
    console.log("Página cargada: asignando atributos tabindex...");

    const imagenes = document.querySelectorAll(".miniatura");

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute("tabindex", "0");
        console.log(`tabindex="0" añadido a la imagen ${i + 1}`);
    }
}