import {getAllAvatars,URL} from "./getCharacters.js";
import listInfo from "./listCharacters.js";

getAllAvatars(URL)
    .then(data => {
        data.map(item => {
            listInfo(item.name, item.species, item.gender, item.image)
        })
    })
    .catch(error => console.log(error))