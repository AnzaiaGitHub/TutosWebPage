const newTutoForm = document.getElementById("newtuto-form");
const userId = localStorage.getItem('user');
const users = JSON.parse(localStorage.getItem('users'));
const activeUser = users.filter((us)=> us.id == userId)[0];
// var tutosShown = TutosList.filter((tt)=>tt.author == JSON.parse(localStorage.getItem('user')));
if(localStorage.getItem('user')==null){
    window.location = "login.php";
}else{
    document.getElementById('admin-view').style.display = activeUser.role == "admin"? 'flex':'none';
}
// window.addEventListener('load', showTutos);
document.getElementById('inputType').addEventListener('change',()=>{
    let contentType = document.getElementById('inputType').value;
    let inputContent = document.getElementById('inputContent');
    if(contentType == 'text' || contentType == 'video'){
        tutoContent.innerHTML = `<label class="form-label" for="inputContent">Contenido</label>
        <textarea name="content" rows="3" id="inputContent" class="form-control" placeholder="${contentType =='text'?'Contenido del tutorial' : 'iframe (video embebido)'}" required></textarea>`;
    }else{
        tutoContent.innerHTML = `<label class="form-label" for="inputContent">Contenido</label>
        <input name="content" id="inputContent" type="file" class="form-control" placeholder="Tuto.jpg" required>`;
    }
});

function createTuto(){
    let inputTitle = document.getElementById('inputTitle');
    let inputType = document.getElementById('inputType');
    let inputContent = document.getElementById('inputContent');
    let inputPreview = document.getElementById('inputPreview');
    let inputSDescription = document.getElementById('inputSDescription');
    let inputLDescription = document.getElementById('inputLDescription');
    let inputShow = document.getElementById('inputShow');
    if(inputShow.checked){
        inputShow.setAttribute('value','1');
    }else{
        inputShow.setAttribute('value','0');
    }
    let now = new Date();
    let uploadDate = document.getElementById('uploadDate');
    let lastUpdate = document.getElementById('lastUpdate');
    let author = document.getElementById('author');
    let showBy = document.getElementById('showBy');
    uploadDate.setAttribute('value',`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getUTCHours()}:${now.getUTCMinutes()<10? "0"+now.getUTCMinutes().toString():now.getUTCMinutes().toString()}`);
    lastUpdate.setAttribute('value',`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getUTCHours()}:${now.getUTCMinutes()<10? "0"+now.getUTCMinutes().toString():now.getUTCMinutes().toString()}`);
    author.setAttribute('value',localStorage.getItem('user'));
    showBy.setAttribute('value',localStorage.getItem('user'));

    if(inputTitle.value == "" ||
    inputContent.value == "" ||
    inputPreview.value == "" ||
    inputSDescription.value == "" ||
    inputLDescription.value == ""
     ){
        alert("Debes llenar todos los campos para poder registrar el tuto.");
     }else{
        newTutoForm.submit();
     }
}