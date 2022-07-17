import {getAllAvatars,url} from "./getCharacters.js";
import listInfo, {infoAvatar, checkStatus} from "./listCharacters.js";

const next = document.getElementById('btn_next')
const prev = document.getElementById('btn_prev')
let current_page = 1;
        var obj_per_page = 20;
        function totNumPages()
        {
            return Math.ceil( 846 / obj_per_page);
        }
        console.log(totNumPages());
        prev.addEventListener('click',()=>{
            if (current_page > 1) {
                current_page--;
                getAllAvatars(url(current_page))
                change(current_page);
                infoAvatar.innerHTML=""
                listAve()
            }
        })
        
        next.addEventListener('click',()=>{
        if (current_page < totNumPages() -1) {
            current_page++;
            getAllAvatars(url(current_page))
            change(current_page);
            infoAvatar.innerHTML=""
            listAve()
        }
    })
    const listAve = () =>{
        
        return  getAllAvatars(url(`${current_page}`))
        .then(data => {
            data.results.map(item => {
                listInfo(item.name, item.species, item.gender, item.image, item.status)
                checkStatus(item.status)
            })
        })
        .catch(error => console.log(error))
    }


   
        function change(page)
        {
            var listing_table = document.getElementById("TableList");
            var page_span = document.getElementById("page");
            // if (page < 1) page = 1;
            
            if (page > totNumPages() -1) page = totNumPages();
            listing_table.innerHTML = "";
            // for (var i = ((page-1) * obj_per_page) +1; i < (page * obj_per_page); i++) {
            //     listing_table.innerHTML += `page ${[i]} <br>`
            // }


            page_span.innerHTML = page;
            if (page == 1) {
                btn_prev.style.visibility = "hidden";
            } else {
                btn_prev.style.visibility = "visible";
            }
            if (page == totNumPages()) {
                btn_next.style.visibility = "hidden";
            } else {
                btn_next.style.visibility = "visible";
            }
        }
        window.onload = function() {
            listAve();
            change(current_page);
        };