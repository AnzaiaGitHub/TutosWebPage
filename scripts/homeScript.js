const tutosContainer = document.getElementById("tutos-container");
const TutosList = Tutos;
var tutosShown = TutosList.filter((tt)=>tt.show == true);

function showTutos(){
    if(tutosShown.length==0)
        alert("No hay Tutos publicados aún, se el primero en hacerlo");
    else{
        //Hay tutos disponibles
        tutosContainer.innerHTML="";
        tutosShown.forEach(tuto => {
            let tutoStr =
            `<div class="tuto-item card" id="${tuto.id}">
                <p class="username">${Users.filter((curUser)=>curUser.id==tuto.author)[0].username}</p>
                <p class="title">${tuto.title}</p>
                <img src="${tuto.imagesrc}" type="image/jpeg" />
                <p class="description">${tuto.sDesc}</p>
            </div>`;
            tutosContainer.innerHTML+=tutoStr;
        });
    }
}
if(localStorage.getItem('user')==null){
    alert("Tienes que iniciar sesión para visualizar las publicaciones.")
    window.location = "login.html";
}
window.addEventListener('load', showTutos);