Este proyecto de Node.js contiene una API (persona) que permite realizar operaciones CRUD. 

ESTRUCTURA
    *app.js: incia el servidor, conecta con la db y referencia al router
    Carpeta app --> 

        routes -->
            * persona.js contiene el objeto enrutador que define las rutas para los metodos http en persona.
            * index.js contiene un sistema que analiza los archivos del directorio local, y dependiendo de su nombre crea una ruta con cada uno de ellos y referencia a sus controladores, por ejemplo --> persona.js -- "/persona"

        controller -->
            *persona.js controladores para los metodos http de las rutas "persona".

        helpers -->
            *handleError contiene funciones para manejar errores como httpError que son utiles para los controladores
        *middleware

    Carpeta config -->
        sql -->  
            *sql.js define la conexion a la db sql usando variables de entorno para una mayor modularización.
            *sqlSync.js define la función que establece la conexión con la db

            models -->
                persona.js define el modelo de persona para db sql

    *.env/.env.example: variables de entorno

