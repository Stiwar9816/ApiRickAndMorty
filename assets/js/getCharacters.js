const URL = "https://rickandmortyapi.com/api/character"
const getAllAvatars = async (url) => {
    try {
        const res = await axios(url)
        const data = await res.data.results
        return data
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllAvatars,
    URL
}