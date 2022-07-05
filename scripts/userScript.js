const tutosContainer = document.getElementById("tutos-container");
const TutosList = JSON.parse(localStorage.getItem("tutos"));
const tutoModal = document.getElementById("tuto-modal");
const userId = localStorage.getItem('user');
const Users = JSON.parse(localStorage.getItem('users'));
const activeUser = Users.filter((us)=> us.id == userId)[0];
var tutosShown = TutosList.filter((tt)=>tt.author == userId);

document.getElementById("LogOut").addEventListener('click', LogOut);

if(localStorage.getItem('user')==null){
    window.location = "login.php";
}else{
    document.getElementById('admin-view').style.display = activeUser.role == "admin"? 'flex':'none';
    fillUserFields();
    showTutos();
}

function showTutos(){
    if(tutosShown.length==0){
        console.log("No has publicado Tutos aún, hazlo en la pestaña del boton +");
        tutosContainer.innerHTML="<p>Aún no has publicado Tutos</p>";
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
            tutoContent = `<img class="imageContent" src="${curTuto.content}" alt="${curTuto.title}" />`; 
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
            <strong>Autor:</strong>
            <h3 class="username">${Users.filter((curUser)=>curUser.id==curTuto.author)[0].username}</h3>
            <strong>Titulo:</strong>
            <h1 class="title"> ${curTuto.title}</h1>
            <strong>Contenido:</strong>
            ${tutoContent}
            <strong>Imagen previa:</strong>
            <img class="imageSrc" src="${curTuto.imagesrc}" alt="${curTuto.title}">
            <strong>Descripcion corta:</strong><p class="description"> ${curTuto.sDesc}</p>
            <strong>Descripcion larga:</strong><p class="lDescription"> ${curTuto.lDesc}</p>
            <strong>Fecha subida:</strong><p class="tuto-Update"> ${uDate.getDate()}/${uDate.getMonth()}/${uDate.getFullYear()} ${uDate.getUTCHours()}:${uDate.getUTCMinutes()<10? "0"+uDate.getUTCMinutes().toString():uDate.getUTCMinutes().toString()}</p>
            <strong>Ultima actualizacion:</strong><p class="tuto-lUpdate"> ${lUpdate.getDate()}/${lUpdate.getMonth()}/${lUpdate.getFullYear()} ${lUpdate.getUTCHours()}:${lUpdate.getUTCMinutes()<10? "0"+lUpdate.getUTCMinutes().toString():lUpdate.getUTCMinutes().toString()}</p>
            <strong>Contenido visible:</strong><p class="tuto-shoTuto"> ${curTuto.showTuto==1?'Visible':'Oculto'}</p>
        </div>
        <div id="tuto-side-editor">
            <div id="closeModal" onclick="document.getElementById('tuto-modal').classList.toggle('modal-active')">
                <strong>X</strong>
            </div>
            <div id="editTuto" onclick="editTuto(${curTuto.id})">
                Editar
            </div>
            <div id="editTuto" onclick="deleteTuto(${curTuto.id})">
                Eliminar
            </div>
        </div>`;
        tutoModal.innerHTML=tutoStr;
        if(!tutoModal.classList.contains('modal-active')){
            tutoModal.classList.toggle('modal-active');
        }
}

function fillUserFields(){
    document.getElementById("username").getElementsByTagName("p")[0].innerHTML = activeUser.username;
    document.getElementById("email").getElementsByTagName("p")[0].innerHTML = activeUser.email;
}

function LogOut(){
    localStorage.clear();
    window.location="login.php";
}

function updateTuto(lTutoId){
    const lastTuto = TutosList.filter((Tt)=>Tt.id==lTutoId)[0];
    alert("Updating: "+lastTuto.title);
    if(
        lastTuto.title != document.getElementById('inputTitle').value ||
        lastTuto.type != document.getElementById('inputType').value ||
        lastTuto.content != document.getElementById('inputContent').value ||
        null != document.getElementById('inputPreview').value ||
        lastTuto.sDesc != document.getElementById('inputSDescription') ||
        lastTuto.lDesc != document.getElementById('inputLDescription') ||
        lastTuto.showTuto != document.getElementById('inputShowTuto')
    ){
        //changes detected
    }else{
        //No updates
    }
}

function deleteTuto(tutoId){
    alert("eliminando tuto: "+tutoId);
}

function editTuto(tutoId){
    let curTuto = tutosShown.filter((tt)=>tt.id == tutoId)[0];
    let uDate = new Date(curTuto.uploadDate);
    let lUpdate = new Date();
    let tutoContent;
    switch(curTuto.type){
        case 'image':
            tutoContent = `<img class="imageContent" src="${curTuto.content}" alt="${curTuto.title}" />
                            <input type="file" class="form-control" name="content" id="inputContent">`; 
        break;
        case 'video':
            tutoContent = `<textarea name="content" class="form-control" id="inputContent">${curTuto.content}</textarea>`;
        break;
        case 'text':
            tutoContent = `<textarea name="content" class="form-control" id="inputContent">${curTuto.content}</textarea>`;
        break;
    }

    let tutoStr =
        `<div class="tuto-item tuto-editor">
            <form id="updateForm" method="post">
                <div class="mb-3">
                    <strong>Titulo:</strong>
                    <input id="inputTitle" name="title" class="form-control" value="${curTuto.title}">
                </div>
                <div class="mb-3">
                    <strong>Tipo de contenido:</strong>
                    <select name="type" id="inputType">
                        <option value="image" ${curTuto.type=='image'?'selected':''}>Imagen</option>
                        <option value="video" ${curTuto.type=='video'?'selected':''}>Video</option>
                        <option value="text" ${curTuto.type=='text'?'selected':''}>Texto</option>
                    </select>
                </div>
                <div class="mb-3" id="content-container">
                    <strong>Contenido:</strong>
                    ${tutoContent}
                </div>
                <div class="mb-3">
                    <strong>Imagen previa:</strong>
                    <img class="imageSrc" src="${curTuto.imagesrc}" alt="${curTuto.title}">
                    <input type="file" class="form-control" name="imagesrc" id="inputPreview">
                </div>
                <div class="mb-3">
                    <strong>Descripcion corta:</strong>
                    <textarea name="sDesc" class="form-control" id="inputSDescription">${curTuto.sDesc}</textarea>
                </div>
                <div class="mb-3">
                    <strong>Descripcion larga:</strong>
                    <textarea name="lDesc" class="form-control" id="inputLDescription">${curTuto.lDesc}</textarea>
                </div>
                <div class="mb-3">
                <input id="inputShowTuto" name="showTuto" class="form-check-input" type="checkbox" ${curTuto.showTuto==1?'checked':''} ${activeUser.role=='admin'?'':(curTuto.showBy != activeUser.id?'disabled':'')}>
                    <strong>Contenido visible</strong>
                </div>
                <div id="editTuto-hide-inputs">
                    <input type="text" id="inputLUpdate" name="lastUpdate" value="${lUpdate.getDate()}/${lUpdate.getMonth()+1}/${lUpdate.getFullYear()} ${lUpdate.getUTCHours()}:${lUpdate.getUTCMinutes()<10? "0"+lUpdate.getUTCMinutes().toString():lUpdate.getUTCMinutes().toString()}" disabled>
                </div>
                <div class="mb-3">
                <button class="btn btn-primary" onclick="updateTuto(${curTuto.id})">Guardar</button>
                <button class="btn btn-secondary" onclick="openTuto(${curTuto.id})">Cancelar</button>
                </div>
            </form>
        </div>
        <div id="tuto-side-editor">
            <div id="closeModal" onclick="document.getElementById('tuto-modal').classList.toggle('modal-active')">
                <strong>X</strong>
            </div>
            <div id="editTuto" onclick="editTuto(${curTuto.id})">
                Editar
            </div>
            <div id="editTuto" onclick="deleteTuto(${curTuto.id})">
                Eliminar
            </div>
        </div>`;
        tutoModal.innerHTML=tutoStr;
        let contentType = document.getElementById("inputType");
        contentType.addEventListener('change',()=>{
            let contentContainer = document.getElementById('content-container');
            contentContainer.innerHTML= `<strong>Contenido:</strong>`;
            if(contentType.value == 'video' || contentType.value == 'text'){
                contentContainer.innerHTML+= `<textarea name="content" class="form-control" id="inputContent" placeholder="${contentType.value == 'video'?'iframe (video embebido)':'Contenido del tutorial'}">${contentType.value==(curTuto.type)?curTuto.content:''}</textarea>`;
            }else{
                contentContainer.innerHTML+= `<input type="file" class="form-control" name="content" id="inputContent">`;
            }
        });
}