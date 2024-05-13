# Mi Blog de Basketball

Este es un blog de juegos de baloncesto dinámico construido con Vite y React, diseñado para ofrecer una experiencia rápida y moderna en la creación y gestión de contenidos.

## ¿Por qué estas tecnologías?

- **React**: Utilizado por su eficiente actualización del DOM y su popularidad en la comunidad de desarrolladores.
  
- **Vite**: Elegido por su rápido tiempo de recarga durante el desarrollo y su configuración mínima.
  
- **Node.js**: Utilizado para el backend, manejo de autenticación y operaciones CRUD debido a su eficiencia en operaciones I/O.
  

## Instrucciones para ejecutar el proyecto localmente

Sigue estos pasos para obtener una copia del proyecto y ejecutarlo en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos

Qué cosas necesitas instalar el software y cómo instalarlas:

- Node.js
  
- npm
  
- Postman
  
- MariaDB
  

### Instalación

Una serie de ejemplos paso a paso que te indican cómo ejecutar un entorno de desarrollo.

##### Clona el repositorio:

- **SSH:** git@github.com:SergioAle210/Proyecto1-Web.git
  
- **HTTPS:** https://github.com/SergioAle210/Proyecto1-Web.git
  

##### Instalar MariaDB

1. sudo apt update
  
2. sudo apt install mariadb-server
  

##### Accede a MariaDB

- sudo mariadb
  

##### Crea la siguiente base de dato

- CREATE DATABASE basketball_blog_db;
  

##### Revisa que se creó correctamente

- SHOW DATABASES;
  

Nota: Te debería de aparecer una tabla llamada Database donde dentro de ella debe de estar **`basketball_blog_db`**

##### Crear un nuevo usuario y otorgar permiso

1. CREATE USER IF NOT EXISTS 'tu_nombre_de_usuario'@'%' IDENTIFIED BY 'tu_contraseña_del_usuario';
  
2. GRANT ALL PRIVILEGES ON basketball_blog_db.* TO 'tu_nombre_de_usuario'@'%' WITH GRANT OPTION;
  
3. FLUSH PRIVILEGES;
  

##### Crear las tablas de entorno

1. Selecciona la base de datos **`basketball_blog_db`**
  
  - USE basketball_blog_db;
    
2. Crea la tabla **`blog_posts`**
  
  `CREATE TABLE IF NOT EXISTS blog_posts (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   content TEXT NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   home_team VARCHAR(255) NOT NULL,
   away_team VARCHAR(255) NOT NULL,
   home_score INT,
   away_score INT,
   image_url TEXT NOT NULL );`
  
3. Crea la tabla `users`
  
  `CREATE TABLE IF NOT EXISTS users (
   id INT AUTO_INCREMENT PRIMARY KEY, user VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL );`
  
4. Sal del cliente de MariaDB
  
  - EXIT;
    

##### Configuración correcta de la conexión con la base de datos

- Dirigete a la carpeta src que se encuentra en la parte del server
  
  - cd Proyecto1-Web/server/src
    
- Ahora modifica el usuario y contraseña del archivo **conn.js** en base a las credenciales que creaste anteriormente
  
  - nano conn.js
    

##### Instala las dependencias del proyecto:

1. cd Proyecto1-Web/server
  
2. npm install
  
3. cd Proyecto1-Web/client
  
4. npm install
  

##### Ejecuta el backend

1. cd Proyecto1-Web/server
  
2. npm start
  
3. Luego, visita `http://127.0.0.1:21122/posts` si quieres revisar que posts estan agregados.
  

##### Ejecuta el servidor de desarrollo

1. cd Proyecto1-Web/client
  
2. npm run dev
  
3. Luego, visita `http://127.0.0.1:3000` en tu navegador y veras la página web.
  

##### Agregar un usuario para el Login

1. Abre Postman en tu ordenador.
  
2. Luego en la URL coloca `http://127.0.0.1:21122/register`
  
3. Selecciona el endpoint de Post
  
4. En el cuerpo tiene que seguir el siguiente formato en la opción raw:
  

`json { "username": "<username>", "password": "<password>" }`

**Nota**: Ten en cuenta que la constraseña tiene que estar en formato **MD5** para poder registrar un usuario.

## Autores

- **Sergio Orellana** - *Proyecto1-Web* - https://github.com/SergioAle210
