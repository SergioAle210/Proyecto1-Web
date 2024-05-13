Nombre del Proyecto

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
  

### Instalación

Una serie de ejemplos paso a paso que te indican cómo ejecutar un entorno de desarrollo.

Clona el repositorio:

- **SSH:** git@github.com:SergioAle210/Proyecto1-Web.git
  
- **HTTPS:** https://github.com/SergioAle210/Proyecto1-Web.git
  

Instala las dependencias del proyecto:

1. cd Proyecto1-Web/server
  
2. npm install

3. cd Proyecto1-Web/client

4. npm install  

Ejecuta el backend

1. cd Proyecto1-Web/server
  
2. npm start
  
3. Luego, visita `http://127.0.0.1:21122/posts` si quieres revisar que posts estan agregados.
  

Ejecuta el servidor de desarrollo

1. cd Proyecto1-Web/client
  
2. npm run dev
  
3. Luego, visita `http://127.0.0.1:3000` en tu navegador y veras la página web.
  

Agregar un usuario para el Login

1. Abre Postman en tu ordenador.
  
2. Luego en la URL coloca `http://127.0.0.1:21122/register`
  
3. Selecciona el endpoint de Post
  
4. En el cuerpo tiene que seguir el siguiente formato en la opción raw:
  

`json { "username": "<username>", "password": "<password>" }`

**Nota**: Ten en cuenta que la constraseña tiene que estar en formato **MD5** para poder registrar un usuario.

## Autores

- **Sergio Orellana** - *Proyecto1-Web* - https://github.com/SergioAle210
