<?php
    $server = "localhost"; //127.0.0.1
    $user = "root";
    $pass = "";

    try{
        $connection = new PDO("mysql:host=$server;dbname=TutosWeb", $user, $pass);
        $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT `email` from `users`;";
        $Query = $connection-> prepare($sql);
        $Query->execute();
        $res = $Query->fetchAll();
        echo "<script> localStorage.setItem('users',JSON.stringify(".json_encode($res)."));</script>";
        if(isset($_POST['email'])){
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            if(isset($_POST['userRole'])){
                $role = "admin";
            }else{
                $role = "user";
            }
            $sql = "INSERT INTO `users`(`username`, `email`, `password`, `role`) VALUES ('$username','$email','$password','$role');";
            $Query = $connection-> prepare($sql);
            $Query->execute();

            echo '<script type="text/javascript">
                    localStorage.setItem("userEmail","'.$email.'");
                    window.location = "home.php";
                </script>';
        }
    }catch(PDOException $err){
        echo "We can't connect with the db<br>";
        echo $err;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutos | Register</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="../styles/regstyle.css" rel="stylesheet">
    <link rel="icon" href="../src/img/mortarboard.png" type="image/PNG">
</head>
<body>
    <div class="container-sm">
        <h3>Crear una cuenta</h3>
        <form id="register-form" method="POST">
            <div class="mb-3">
                <label class="form-label" for="inputUsername">Username</label>
                <input type="text" name="username" id="inputUsername" class="form-control" placeholder="Carl123" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="inputEmail">Email</label>
                <input type="email" name="email" id="inputEmail" class="form-control" placeholder="name@example.com" required>
            </div>
            <div class="mb-3">    
                <label class="form-label" for="inputPassword">Contraseña</label>
                <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
            </div>
            <div class="form-check mb-3">    
                <input type="checkbox" name="userRole" id="inputRole" class="form-check-input" value="admin">
                <label class="form-check-label" for="inputRole">Cuenta de administrador</label>
            </div>
            <div class="mb-3 btn-container">
                <button class="btn btn-primary" type="button" onclick="register()">Crear cuenta</button>
                <span>
                    ¿Ya tienes una cuenta?, intenta ir a <a href="login.php" class="btn-link">LogIn</a>
                </span>
            </div>
        </form>
    </div>
    <script src="../scripts/registerScript.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>