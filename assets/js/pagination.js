import { infoAvatar } from "./listCharacters.js";
import { url,getAllAvatars } from "./getCharacters.js";
import { listAvatars } from "./index.js";

//Referencia de los botones atras y adelante y el marcador de la pagina donde me encuentro
const next = document.getElementById('btn-next')
const prev = document.getElementById('btn-prev')
const page_span = document.getElementById("page")
//Exportación de la pagina inicial de los personajes
export let current_page = 1;
//Numero de paginas actuales con la que cuenta el endPonit de obtener personajes
const numPages = () => Math.ceil(846 / 20 - 1)

//Evento click que valida en la pagina en la que estoy y si es posible restarle una unidad
//Devolviendo la pagina anterior de mi respuesta de la API
prev.addEventListener('click', () => {
    if (current_page > 1) {
        current_page--;
        getAllAvatars(url(current_page))
        changPage(current_page);
        infoAvatar.innerHTML = ""
        listAvatars()
    }
})
//Evento click que valida en la pagina en la que estoy y si es posible sumarle una unidad
//Devolviendo la pagina siguiente de mi respuesta de la API
next.addEventListener('click', () => {
    if (current_page < numPages()) {
        current_page++;
        getAllAvatars(url(current_page))
        changPage(current_page);
        infoAvatar.innerHTML = ""
        listAvatars()
    }
})
//Exportación de chanPage a archivo index.js para validar si muestra siguiente pagina o pagina anterior
export const changPage = (page) => {
    if (page > numPages()) page = numPages();
    page_span.innerHTML = page;
    if (page == 1) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    }
    if (page == numPages()) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
    }
}