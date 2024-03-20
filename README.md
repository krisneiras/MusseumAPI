
<div align="center">
  <h1>Hello there! 🤗 Welcome to this repository where you will find an API REST of Sculptures and will be able to Create new sculptures, update, delete and see all your collection.  


**Step 0 Clone the repository**

git clone https://github.com/krisneiras/MusseumAPI.git

This is the extension of another Front-End project, if you wish to see the app in your explore, feel free to also have a look or clone this repository as well https://github.com/BeatrizCPerez/MappSeum.git .

Step 1: Install dependencies

npm i

Built with: 



**Step 2 Create and connect your DataBase**

In this project we created our DB with mysql, so you will have to create your database and call it sculptures and another one for the tests called sculptures_test.

In the files you will see an .env_example, you rename it to .env and enter your real information:

DB_DEV_NAME=
DB_USER=
DB_PASSWORD=
DB_PORT=

DB_TEST_NAME=

**Step 3 Run the server** 🚀🚀

Write this command on your terminal:

npm run dev 

**Step 4 Try all requests with Postman**

Here you have all requests and their endpoints:

GET all http://localhost:5000/api
GET one http://localhost:5000/api/id
POST http://localhost:5000/api
PUT http://localhost:5000/api/id
DELTE http://localhost:5000/api/id

Also some screenshots of the requests made with postman:



**TESTS**👨🏼‍🔬👩🏼‍🔬

To run the tests write in the terminal:

npm run test

</h1>
</div>

## Descripción del Proyecto:

El proyecto "API MUSEO" es una API RESTful desarrollada en Node.js utilizando Express.js y Sequelize como ORM para interactuar con una base de datos relacional. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre recursos de esculturas en un museo.

## Estructura del Proyecto:

El proyecto está organizado de la siguiente manera:

css
Copy code
project/

├── src/
│   ├── controllers/
│   │   └── sculptureController.js
│   │
│   ├── routes/
│   │   └── sculptureRoutes.js
│   │
│   ├── models/
│   │   └── sculptureModel.js
│   │
│   ├── helpers/
│   │   └── validationResult.js
│   │
│   ├── validation/
│   │   └── sculptureValidation.js
│   │
│   ├── database/
│   │   └── connection_db.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── sculpture.test.js
│
├── node_modules/
├── package.json
└── .gitignore


src/: Contiene todo el código fuente de la aplicación.
controllers/: Controladores para manejar las operaciones CRUD.
routes/: Definición de rutas y manejo de las solicitudes HTTP.
models/: Definición de los modelos de datos utilizando Sequelize.
helpers/: Funciones de ayuda para manejar la validación de resultados, entre otras cosas.
validation/: Archivos de validación utilizando express-validator para validar datos de entrada.
database/: Configuración de la conexión a la base de datos.
app.js: Archivo principal de la aplicación que configura Express y define las rutas.
server.js: Archivo para iniciar el servidor Express.
tests/: Contiene las pruebas automatizadas para la API.
node_modules/: Carpeta donde se instalan las dependencias de Node.js.
package.json: Archivo de configuración del proyecto que incluye las dependencias y scripts.
.gitignore: Archivo que especifica qué archivos y carpetas deben ser ignorados por Git.


## Instalación y Ejecución del Proyecto

## Clona el repositorio desde GitHub:

1. **Clona el Repositorio:**

    ```bash
    git clone https://github.com/krisneiras/MusseumAPI.git
    ```

2. **Navega hasta el directorio del proyecto:**

    ```bash
    cd project
    ```

3. **Instala las dependencias del proyecto:**

    ```bash
    npm install
    ```

4. **Ejecuta las migraciones de la base de datos para crear las tablas:Inicia el servidor en modo de desarrollo:**

    ```bash
    npx sequelize-cli db:migrate
    ```

5. **Esto iniciará el servidor en el puerto 5000 por defecto.**
    ```bash
    npm run dev
    ```  
    
6. **Para ejecutar las pruebas automatizadas:**
    ```bash
    npm run test
    ```  

## Dependencias del Proyecto

Express.js: Framework web para Node.js utilizado para crear la API.
Sequelize: ORM para interactuar con la base de datos relacional.
express-validator: Middleware para validar datos de entrada en las solicitudes HTTP.
Jest: Framework de pruebas para JavaScript.
Supertest: Librería para realizar pruebas de integración con API HTTP.
Nodemon: Herramienta para reiniciar automáticamente el servidor cuando se realizan cambios en el código durante el desarrollo.

## Notas Adicionales

*Asegúrate de configurar correctamente tu archivo .env con las credenciales de tu base de datos.
Si experimentas problemas con el puerto 5000 en uso, verifica que no haya otro proceso utilizando ese puerto. Puedes cambiar el puerto en el archivo app.js si es necesario.
*Mantén actualizadas las dependencias del proyecto ejecutando npm update de vez en cuando.
*Consulta la documentación de cada paquete para obtener más información sobre su uso y configuración específica.


Este README proporciona una visión general del proyecto "API MUSEO" y los pasos básicos para instalar, ejecutar y probar la aplicación. Si necesitas más información o ayuda adicional, no dudes en consultar la documentación de cada paquete o contactar al desarrollador del proyecto.