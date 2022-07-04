<?php
    $server = "localhost"; //127.0.0.1
    $user = "root";
    $pass = "";

    try{
        $connection = new PDO("mysql:host=$server;dbname=TutosWeb", $user, $pass);
        $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT `id`,`email` from `users`;";
        $Query = $connection-> prepare($sql);
        $Query->execute();
        $res = $Query->fetchAll();
        echo "<script> localStorage.setItem('users',JSON.stringify(".json_encode($res)."));</script>";
    }catch(PDOException $err){
        echo "We can't connect with the db<br>";
        echo $err;
    }
?>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tutos | Inicio</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link href="../styles/homestyle.css" rel="stylesheet" />
    <link rel="icon" href="../src/img/mortarboard.png" type="image/PNG" />
  </head>
  <body>
    <header>
      <div class="logo">
        <img src="../src/img/mortarboard.png" alt="TutosLogo" />
        <h4>Tutos Share</h4>
      </div>
      <div class="searchcontainer">
        <input
          class="form-control"
          type="text"
          name="searchbar"
          id="homeSearchBar"
          placeholder="Buscar"
        />
      </div>
    </header>
    <main>
        <div class="container-lg" id="tutos-container">
        </div>
    </main>
    <nav class="bottom-navbar">
        <ul class="navbar-ul">
            <li class="navbar-item">
                <a href="newtuto.php">
                    <svg viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
                        />
                    </svg>
                </a>
            </li>
            <li class="navbar-item navbar-active">
                <a href="home.php">
                    <svg
                    id="Layer_1"
                    enable-background="new 0 0 100 100"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g>
                        <path
                        d="m83.5 100h-67c-9 0-16.5-7.6-16.5-16.7v-36.5c0-4.6 2-9.1 5.5-12.2l33.5-30.4c6.5-5.6 15.5-5.6 22 0l33.5 30.4c3.5 3 5.5 7.6 5.5 12.2v36.5c-.5 9.6-7.5 16.7-16.5 16.7zm-33.5-89.7c-1.5 0-3 .5-4.5 1.5l-33.5 30.4c-1.5 1-2 3-2 5.1v36.5c0 3.5 3 6.6 6.5 6.6h66.5c3.5 0 6.5-3 6.5-6.6v-36.5c0-2-1-3.5-2-5.1l-33.5-30.4c-1-1-2.5-1.5-4-1.5z"
                        />
                    </g>
                </svg>
            </a>
        </li>
        <li class="navbar-item">
            <a href="user.php">
                <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
                >
                <g>
                    <g>
                        <path
                        d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240
                        c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"
                        />
                    </g>
                </g>
                <g>
                    <g>
                        <path
                        d="M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195
                        C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15
                        C481,444.833,460.745,395.539,423.966,358.195z M61.66,482c7.515-85.086,78.351-152,164.34-152h60
                        c85.989,0,156.825,66.914,164.34,152H61.66z"
                        />
                    </g>
                </g>
            </svg>
        </a>
    </li>
</ul>
</nav>
<div id="tuto-modal" class="tuto-modal">
</div>
<script type="text/javascript" src="../src/Data/Users.js"></script>
<script type="text/javascript" src="../src/Data/Tutos.js"></script>
<script type="text/javascript" src="../scripts/homeScript.js"></script>
<script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>