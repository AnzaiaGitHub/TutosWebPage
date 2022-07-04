var username = document.getElementById("inputUsername");
var userEmail = document.getElementById("inputEmail");
var userPass = document.getElementById("inputPassword");
var userRole = document.getElementById("inputRole");
const users = JSON.parse(localStorage.getItem("users"));
//Users is defined in src/Data/Users.js an array of Users (just test users, no database query)
if(localStorage.getItem('user')!= null || localStorage.getItem('userEmail')!=null){
    if(localStorage.getItem('user')==null){
        let userId = JSON.parse(localStorage.getItem("users")).filter((us)=>us.email == localStorage.getItem('userEmail'))[0].id;
        localStorage.setItem('user', userId);
        // localStorage.removeItem('userEmail');
    }
    window.location= "home.php";
}
window.addEventListener('storage', ()=>{
    if(localStorage.getItem('user')==null && localStorage.getItem("users").contain(localStorage.getItem("userEmail"))){
        let userId = JSON.parse(localStorage.getItem("users")).filter((us)=>us.email == localStorage.getItem('userEmail'))[0].id;
        localStorage.setItem('user', userId);
        localStorage.removeItem('userEmail');
        window.location = "home.php";
    }else{
        localStorage.removeItem("userEmail");
    }
});
function register(){
    if(userPass.value != "" && userEmail.value != "" && username.value != ""){
        if(users.filter((curUser)=>curUser.email.toUpperCase() === userEmail.value.toUpperCase()).length == 1){
            alert("El correo ya tiene una cuenta asociada, inicia sesión o verifica el correo ingresado.");
        }else{
            if(validateEmail(userEmail.value)=="right"){
                alert("Registrando a "+userEmail.value);
                document.getElementById("register-form").submit();
            }else{
                alert(validateEmail(userEmail.value));
            }
        }
    }else{
        alert("Debe diligenciar los campos antes de registrarse.");
    }
}
function validateEmail(email){
    if(email.split('@').length==1){
        document.getElementById("inputEmail").focus();
        return "El email debe tener el simbolo @";
    }else{
        if(email.split('@')[0]!=""){
            //tiene usuario, revisar dominio
            if(email.split('@')[1].split('.').length==1 || email.split('@')[1].split('.')[0]=="" || email.split('@')[1].split('.')[1]==""){    
                document.getElementById("inputEmail").focus();
                return "El dominio del email está incompleto";
            }else{
                return "right";
            }
        }else{
            document.getElementById("inputEmail").focus();
            return "Falta llenar la direccion del email";
        }
    }
}

