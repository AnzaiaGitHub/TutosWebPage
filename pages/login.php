<?php
    $server = "localhost"; //127.0.0.1
    $user = "root";
    $pass = "";

    try{
        $connection = new PDO("mysql:host=$server;dbname=TutosWeb", $user, $pass);
        $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if(isset($_POST['email'])){
            $email = $_POST['email'];
            $password = $_POST['password'];
            $sql = "SELECT `id` FROM `users` WHERE (`users`.`email` = '$email') AND (`users`.`password` = '$password');";
            $Query = $connection-> prepare($sql);
            $Query->execute();
            $res = $Query->fetchAll();
            if($res){
                echo '<script type="text/javascript">
                        localStorage.setItem("user",JSON.stringify('.json_encode($res).'[0].id));
                        window.location = "home.php";
                    </script>';
            }else{
                echo '<script type="text/javascript">
                        alert("Email o Contraseña erróneos, verifica los datos e intenta de nuevo");
                    </script>';
            }
        }
    }catch(PDOException $err){
        echo "We can't connect with the db<br>";
        echo $err;
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutos | LogIn</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="../styles/style.css" rel="stylesheet">
    <link rel="icon" href="../src/img/mortarboard.png" type="image/PNG">
</head>
<body>
    <div class="container-sm">
        <h1>Tutos Share</h1>
        <form id="login-form" method="post">
            <div class="mb-3">
                <label class="form-label" for="inputEmail">Email</label>
                <input type="email" name="email" id="inputEmail" class="form-control" placeholder="name@example.com" required>
            </div>
            <div class="mb-3">    
                <label class="form-label" for="inputPassword">Password</label>
                <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
            </div>
            <div class="mb-3 btn-container">
                <button class="btn btn-primary" type="button" onclick="login()">LogIn</button>
                <button class="btn btn-secondary" type="button" onclick="location='register.php'">Registrar</button>
            </div>
        </form>
    </div>
    <script src="../scripts/loginScript.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>