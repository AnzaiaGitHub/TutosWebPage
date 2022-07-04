<?php
    $server = "localhost"; //127.0.0.1
    $user = "root";
    $pass = "";

    try{
        $connection = new PDO("mysql:host=$server;dbname=TutosWeb", $user, $pass);
        $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT `id`,`email`,`role`,`username` from `users`;";
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
    <div class="side-divisor">
        <main>
            <div class="container-lg" id="tutos-container">
            </div>
        </main>
        <nav class="side-navbar">
            <div><</div>
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
                <li id="admin-view" class="navbar-item">
                    <a href="adminview.php">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="b"><path d="m256.64 38.6c58.7 19.44 118.95 42.33 170.47 62.31 3.58 23.45 8.49 63.67 9.43 112.29.83 55.38-3.75 85.93-5.78 96.58-4.25 14.67-13.17 30.61-26.51 47.37-15.82 19.86-37.36 40.51-64.02 61.36-.02.01-.04.03-.05.04-37.89 29.74-72.97 48.91-83.54 54.43-10.57-5.51-45.61-24.64-83.48-54.36l-.05-.04c-26.65-20.84-48.18-41.48-63.97-61.33-12.67-15.93-21.35-31.13-25.83-45.18-.12-.47-.25-.94-.4-1.42-2-6.77-8.43-34.04-7.46-101.16 1.06-42.76 4.98-80.96 11.1-108.84 51.36-19.89 111.43-42.68 170.09-62.06m0-38.51c-3.01 0-6.03.48-8.96 1.45-57.51 18.9-116.5 41.07-176.49 64.31-8.07 3.13-14.84 8.92-19.24 15.96.34.04-12.33 39.59-14.49 126.94-1.28 87.36 9.6 113.53 9.24 113.56 5.89 19.2 16.91 38.73 32.7 58.59 17.65 22.18 41.5 45.09 70.31 67.61 47.69 37.43 92.32 59.8 94.19 60.59 4.04 1.98 8.33 2.98 12.75 2.98h.01c4.43 0 8.72-1.01 12.76-3 1.88-.79 46.56-23.23 94.23-60.65 28.82-22.54 52.67-45.45 70.33-67.62 16.92-21.27 28.36-42.14 33.89-62.64-.22-.03 7.78-32.11 6.67-105.62-1.41-73.5-11.65-127.71-11.51-127.76-4.26-8.31-11.73-15.26-20.87-18.81-60-23.25-119-45.46-176.52-64.42-2.95-.97-5.97-1.46-8.99-1.46z"/><path d="m256.61 353.07c-10.96 0-21.26-4.26-29-12.01-7.75-7.75-12.02-18.05-12.02-29v-32.03c-16.76-12.55-26.78-32.21-26.79-53.7 0-37.05 30.14-67.2 67.19-67.21 17.95 0 34.83 6.99 47.52 19.68s19.69 29.57 19.69 47.52c0 20.83-9.57 40.16-25.58 52.77v32.97c0 10.96-4.26 21.26-12.01 29-7.75 7.75-18.05 12.01-29 12.02zm-.61-155.96c-16.1 0-29.2 13.1-29.2 29.2 0 11.16 6.22 21.19 16.24 26.17 6.46 3.21 10.54 9.8 10.54 17.01v42.56c0 1.66 1.36 3.02 3.02 3.02 1.03 0 1.73-.48 2.13-.88s.88-1.1.88-2.13v-43.17c0-7.02 3.87-13.47 10.07-16.77 9.57-5.1 15.52-14.98 15.51-25.8 0-7.8-3.04-15.13-8.55-20.65-5.52-5.51-12.85-8.55-20.65-8.55z"/></g></svg>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
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
