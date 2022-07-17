const infoAvatar = document.querySelector(".card-info")

const listInfo = (name, species, gender, image) => {
    return infoAvatar.innerHTML +=
        `
    <img
        src="${image}"
        class="card-img-top"
        alt="avatar"
        id="imageAvatar"
      />
      <div class="card-body">
        <h3 class="card-title" id="nameAvatar">${name}</h3>
        <span class="card-text" id="speciesAvatar">${species}</span> -
        <span class="card-text" id="genderAvatar">${gender}</span>
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
