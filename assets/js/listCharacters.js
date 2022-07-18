//Exportación de variable infoAvatar que se usa en pagination.js
export const infoAvatar = document.querySelector(".card-info");

//listInfo Recibe los parametros pasados en el archivo index.js
//Lista todos los personas el el DOM por me dio de la clase guardada en la constante infoAvatar
const listInfo = (name, species, gender, image, status) => {

     infoAvatar.innerHTML +=
        `
        <div class="card-body">
        <img
            src="${image}"
            class="card-img-top"
            alt="avatar"
            id="imageAvatar"
          />
        <h3 class="card-title"  id="nameAvatar">${name}</h3>
        <span class="card-text" id="speciesAvatar">${species} - ${gender}</span> 
        <span class="card-text status" id="statusAvatar">${status}</span> 
      </div>
      `
} 
//Evaluar el estado de los personajes devolviendo un color rojo a los muertos y verde a los vivos
//Esporto check status para ser usado en el archivo index.js
export const checkStatus = (status)=>{
    if(status == 'Alive'){
        document.querySelector(".status").className = "green";
      }else if(status == 'unknown'){
        document.querySelector(".status").className = "black";
      }
      else{
        document.querySelector(".status").className = "red";
      }
}

//Esportación a listInfo para ser usada en index.js
export default listInfo;
