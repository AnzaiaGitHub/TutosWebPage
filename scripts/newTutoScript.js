const tutosContainer = document.getElementById("tutos-container");
// const TutosList = Tutos;
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