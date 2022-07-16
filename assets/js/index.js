const URL = "https://rickandmortyapi.com/api/character"

async function getNameAvatars(url){
    try {
        const res = await axios.get(url)
        const name = res.data.results[0].name
        nameAvatar.innerText = name
    } catch (err) {
        console.error(err)
    }
}

async function getSpecieAvatar(url){
    try {
        const res = await axios.get(url)
        const species = res.data.results[0].species
        speciesAvatar.innerText = species
    } catch (err) {
        console.error(err)
    }
}

async function getGenderAvatar(url){
    try {
        const res = await axios.get(url)
        const gender = res.data.results[0].gender
        genderAvatar.innerText = gender
    } catch (err) {
        console.error(err)
    }
}

async function getImageAvatar(url){
    try {
        const res = await axios.get(url)
        const image = res.data.results[0].image
        imageAvatar.innerText = image
    } catch (err) {
        console.error(err)
    }
}

// Consultas
const nameAvatar = document.getElementById("nameAvatar")
nameAvatar.innerText = `${getNameAvatars(URL)}`

const speciesAvatar = document.getElementById("speciesAvatar")
speciesAvatar.innerText =  `${getSpecieAvatar(URL)}`

const genderAvatar = document.getElementById("genderAvatar")
genderAvatar.innerText = `${getGenderAvatar(URL)}`

const imageAvatar = document.getElementById("imageAvatar")
imageAvatar.innerHTML =  `<img src="${getImageAvatar(URL)}"/>`