import {getAllAvatars,URL} from "./getCharacters.js";
import listInfo, {checkStatus} from "./listCharacters.js";

getAllAvatars(URL)
    .then(data => {
        data.results.map(item => {
            listInfo(item.name, item.species, item.gender, item.image,item.status)
            checkStatus(item.status)
        })
    })
    .catch(error => console.log(error))
