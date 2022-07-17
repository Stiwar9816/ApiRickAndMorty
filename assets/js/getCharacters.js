const url = (page)=>{
     const movePage = `https://rickandmortyapi.com/api/character/?page=${page}`
    return  movePage;
}


const getAllAvatars = async (url) => {
    try {
        const res = await axios(url)
        const data =  res.data
        return data
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllAvatars,
    url
}