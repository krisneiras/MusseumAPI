
Proyecto 06 API MUSEO

Descripción del Proyecto:

El proyecto "API MUSEO" es una API RESTful desarrollada en Node.js utilizando Express.js y Sequelize como ORM para interactuar con una base de datos relacional. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre recursos de esculturas en un museo.

Estructura del Proyecto:

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


Instalación y Ejecución del Proyecto

Clona el repositorio desde GitHub:

bash
Copy code
  git clone https://github.com/krisneiras/MusseumAPI.git
Navega hasta el directorio del proyecto:

bash
Copy code
  cd project
Instala las dependencias del proyecto:

Copy code
   npm install
Ejecuta las migraciones de la base de datos para crear las tablas:

Copy code
   npx sequelize-cli db:migrate
Inicia el servidor en modo de desarrollo:

arduino
Copy code
   npm run dev
Esto iniciará el servidor en el puerto 5000 por defecto.

Para ejecutar las pruebas automatizadas:

arduino
Copy code
   npm run test


Dependencias del Proyecto

Express.js: Framework web para Node.js utilizado para crear la API.
Sequelize: ORM para interactuar con la base de datos relacional.
express-validator: Middleware para validar datos de entrada en las solicitudes HTTP.
Jest: Framework de pruebas para JavaScript.
Supertest: Librería para realizar pruebas de integración con API HTTP.
Nodemon: Herramienta para reiniciar automáticamente el servidor cuando se realizan cambios en el código durante el desarrollo.

Notas Adicionales

*Asegúrate de configurar correctamente tu archivo .env con las credenciales de tu base de datos.
Si experimentas problemas con el puerto 5000 en uso, verifica que no haya otro proceso utilizando ese puerto. Puedes cambiar el puerto en el archivo app.js si es necesario.
*Mantén actualizadas las dependencias del proyecto ejecutando npm update de vez en cuando.
*Consulta la documentación de cada paquete para obtener más información sobre su uso y configuración específica.


Este README proporciona una visión general del proyecto "API MUSEO" y los pasos básicos para instalar, ejecutar y probar la aplicación. Si necesitas más información o ayuda adicional, no dudes en consultar la documentación de cada paquete o contactar al desarrollador del proyecto.