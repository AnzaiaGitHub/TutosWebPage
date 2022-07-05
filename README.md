### TutosWebPage
# Credenciales para ingreso a la plataforma
- Email: Anzaia@tutos.com
- Contraseña: Admin1
- rol: admin
- posts: 0

- Email: claranym464@gmail.com
- Contraseña: Sombrasconclara346
- rol: user
- posts: 2

- Email: Platzi@platzi.com
- Contraseña: Platzi2022*
- rol: user
- posts: 1

# Funcionalidades
- Se pueden crear usuarios en la página register.php.

- Se pueden iniciar sesión en la página login.php.

- Se puede visualizar los "Tutos" publicados (solo aquellos que tengan el atributo showTuto en 'true' o '1') al iniciar sesión en la pestaña home.php.
- Se puede visualizar la información completa de un "Tuto" al dar click en el mismo.

- Se puede crear "Tutos" en la página newtuto.php.

- Se puede visualizar la información del usuario activo en la página user.php.
- Se puede dar LogOut en la página user.php.
- Se visualizarán los "Tutos" que el usuario ha publicado (al ser el autor, podra visualizar los que tengan contenido oculto) en la página user.php.

- Se podrá abrir una opción para editar un "Tuto" al estar visualizando la información completa del "Tuto" en el modal diseñado para ello (No se hace modificación en la base de datos).

- Se visualizará en el menú lateral una opción exclusiva para administradores.

# Base de datos
- Se creó una base de datos llamada "tutoswebpage" que contendrá la información de la aplicación.

- Se creó la tabla `users` donde se almacenaron los siguientes atributos:
id, username, email, password, role('admin' o 'user').

- Se creó la tabla `tutos` donde se almacenaron los siguientes atributos:
id,
title,
author(user.id),
sDesc (descripción corta),
lDesc (descripción larga),
type (tipo de contenido: imagen, video, texto),
content (contenido según su tipo: imagen->ruta, texto->texto, video->video embebido),
imageSrc (ruta de imagen de previsualización),
uploadDate,
lastUpdate (guardaría la fecha de la última modificación del contenido),
shoTuto (contenido visible u oculto según true||false),
showBy (user.id: guardaría quién hizo el último cambio de estado a su atributo "showTuto", para evitar que los usuarios desautorizaran los cambios hechos por los administradores que hubieran ocultado contenido sensible o inadecuado).

# Entregables restantes
- Crear las tablas `tags-tuto` y `categories_tuto`, para relacionar cada tuto con sus muchas categorías y etiquetas.

- Desarrollar la página adminview.php donde se mostraría la tabla de todos los "Tutos" con su información completa y modificable por los administradores;

- Realizar el filtro de "Tutos" por título, etiquetas, categorías y autores en la página home.php y adminview.php.

- Realizar la verificación de la información modificada de los "Tutos" en la pestaña user.php y actualizar la información en la base de datos.