import {getAllAvatars,url} from "./getCharacters.js";
import listInfo, {checkStatus} from "./listCharacters.js";
import { current_page, changPage } from "./pagination.js";

//Listar todos los personajes en el DOM
//Exportación de listAvatars para ser usada en pagination.js
export const listAvatars = () => {
    return getAllAvatars(url(`${current_page}`))
        //En caso de resolverse la promesa devuelvame la data
        .then(data => {
            //Recorro el array de resultados enviando los datos por parametros a listInfo y checkStatus
            data.results.map(item => {
                listInfo(item.name, item.species, item.gender, item.image, item.status)
                checkStatus(item.status)
            })
        })
        //En caso ocurra un error al resolver la promesa, muestreme ese error
        .catch(error => console.log(error))
}


//Mustra los datos en el DOM una vez el objeto window inicialize
window.onload = function () {
    listAvatars();
    changPage(current_page);
};