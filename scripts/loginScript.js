const userEmail = document.getElementById("inputEmail");
const userPass = document.getElementById("inputPassword");

//Users is defined in src/Data/Users.js an array of Users (just test users, no database query)
if(localStorage.getItem('user')!= null || localStorage.getItem('userEmail')){
    if(localStorage.getItem('user')==null){
        let userId = localStorage.getItem('users').filter((us)=>us.email == localStorage.getItem('userEmail'))[0].id;
        localStorage.setItem('user',userId);
        localStorage.removeItem('userEmail');
    }
    window.location= "home.php";
}
function login(){
    document.getElementById('login-form').submit();
    /*if(Users.filter((curUser)=>curUser.email.toUpperCase() === userEmail.value.toUpperCase()).length == 1){
        let user = Users.filter((curUser)=> curUser.email.toUpperCase() == userEmail.value.toUpperCase())[0];
        if(user.password === userPass.value){
            localStorage.setItem('user',user.id);
            window.location= "home.php";
        }else{
            alert("Contraseña o email erroneo, verifica los datos e intentalo de nuevo.");
        }
    }else{
        alert("No existe un usuario con email: "+userEmail.value+", puedes registrarte en el link al lado del boton de LogIn");
    }*/
}

