const userEmail = document.getElementById("inputEmail");
const userPass = document.getElementById("inputPassword");

//Users is defined in src/Data/Users.js an array of Users (just test users, no database query)

function login(){
    if(Users.filter((curUser)=>curUser.email.toUpperCase() === userEmail.value.toUpperCase()).length == 1){
        let user = Users.filter((curUser)=> curUser.email.toUpperCase() == userEmail.value.toUpperCase())[0];
        console.log(user);
        if(user.password === userPass.value){
            alert("Log In.");
        }else{
            alert("Contraseña o email erroneo, verifica los datos e intentalo de nuevo.");
        }
    }else{
        alert("No existe un usuario con email: "+userEmail.value+", puedes registrarte en el link al lado del boton de LogIn");
    }
}
