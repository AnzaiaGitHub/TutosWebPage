const tutosContainer = document.getElementById("tutos-container");
const TutosList = Tutos;
const tutoModal = document.getElementById("tuto-modal");
const activeUser = Users.filter((us)=>us.id == JSON.parse(localStorage.getItem('user')))[0];
var tutosShown = TutosList.filter((tt)=>tt.author == JSON.parse(localStorage.getItem('user')));
document.getElementById("LogOut").addEventListener('click', LogOut);
if(localStorage.getItem('user')==null){
    window.location = "login.html";
}else{
    fillUserFields();
}
function showTutos(){
    if(tutosShown.length==0){
        console.log("No has publicado Tutos aún, hazlo en la pestaña del boton +");
        console.log(localStorage.getItem('user'));
    }else{
        //Hay tutos disponibles
        tutosContainer.innerHTML="";
        tutosShown.forEach(tuto => {
            let tutoStr =
            `<div class="tuto-item card" id="${tuto.id}" onclick="openTuto('${tuto.id}')">
                <p class="username">${Users.filter((curUser)=>curUser.id==tuto.author)[0].username}</p>
                <p class="title">${tuto.title}</p>
                <img src="${tuto.imagesrc}" type="image/jpeg" />
                <p class="description">${tuto.sDesc}</p>
            </div>`;
            tutosContainer.innerHTML+=tutoStr;
        });
    }
}
function openTuto(tutoid){
    let curTuto = tutosShown.filter((tt)=>tt.id == tutoid)[0];
    let uDate = new Date(curTuto.uploadDate);
    let lUpdate = new Date(curTuto.lastUpdate);
    let tutoContent;
    switch(curTuto.type){
        case 'image':
            tutoContent = `<img class="imageContent" src="${curTuto.imagesrc}" type="image/jpeg" alt="${curTuto.title}" />`; 
        break;
        case 'video':
            tutoContent = `${curTuto.content}`;
        break;
        case 'text':
            tutoContent = `<p class="textContent">${curTuto.content}</p>`;
        break;
    }
    console.log("Content: "+tutoContent);
    let tutoStr =
        `<div class="tuto-item">
            <h3 class="username"><strong>Autor: </strong>${Users.filter((curUser)=>curUser.id==curTuto.author)[0].username}</h3>
            <h1 class="title"><strong>Titulo:</strong> ${curTuto.title}</h1>
            ${tutoContent}
            <p class="description"><strong>Descripcion corta:</strong> ${curTuto.sDesc}</p>
            <p class="lDescription"><strong>Descripcion larga:</strong> ${curTuto.lDesc}</p>
            <p class="tuto-Update"><strong>Fecha subida:</strong> ${uDate.getDate()}/${uDate.getMonth()}/${uDate.getFullYear()} ${uDate.getUTCHours()}:${uDate.getUTCMinutes()<10? "0"+uDate.getUTCMinutes().toString():uDate.getUTCMinutes().toString()}</p>
            <p class="tuto-lUpdate"><strong>Ultima actualizacion:</strong> ${lUpdate.getDate()}/${lUpdate.getMonth()}/${lUpdate.getFullYear()} ${lUpdate.getUTCHours()}:${lUpdate.getUTCMinutes()<10? "0"+lUpdate.getUTCMinutes().toString():lUpdate.getUTCMinutes().toString()}</p>
        </div>
        <div id="closeModal" onclick="document.getElementById('tuto-modal').classList.toggle('modal-active')"><strong>X</strong></div>`;
    tutoModal.innerHTML=tutoStr;
    tutoModal.classList.toggle('modal-active');
}
function fillUserFields(){
    document.getElementById("username").getElementsByTagName("p")[0].innerHTML = activeUser.username;
    document.getElementById("email").getElementsByTagName("p")[0].innerHTML = activeUser.email;
}
function LogOut(){
    localStorage.clear();
    window.location="login.html";
}
window.addEventListener('load', showTutos);