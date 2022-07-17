export const infoAvatar = document.querySelector(".card-info");

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


export default listInfo;
