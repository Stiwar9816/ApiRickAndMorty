//Función que recibe el numero de la pagina a la que se desea dirigir
const url = (page)=>{
     const movePage = `https://rickandmortyapi.com/api/character/?page=${page}`
    return  movePage;
}

//Función encargada de obtener todos los personajes devolviendo un JSON de información 
const getAllAvatars = async (url) => {
    try {
        const res = await axios(url)
        const data =  res.data
        return data
    } catch (error) {
        console.log(error);
    }
}

//Exportacion de funciones que se usan en el archivo index.js y paginatión.js
export {
    getAllAvatars,
    url
}
