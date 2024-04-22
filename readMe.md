Este proyecto de Node.js contiene una API (persona) que permite realizar operaciones CRUD. 

ESTRUCTURA
    *app.js: incia el servidor, conecta con la db y referencia al router
    Carpeta app --> 

        routes -->
            * personas.js contiene el objeto enrutador que define las rutas para los metodos http en persona.
            * users.js contiene el objeto enrutador que define las rutas para los metodos http en users.
                incluye /users/register y /users/login (ambas POST)
            * index.js contiene un sistema que analiza los archivos del directorio local, y dependiendo de su nombre crea una ruta con cada uno de ellos y referencia a sus controladores, por ejemplo --> persona.js -- "/persona"


        controller -->
            *personas.js controladores para los metodos http de las rutas "persona".
            users.js controladores para:
                login de los usuarios (proporciona un token de acceso JWT(Json web token) que el usuario debe usar como "authorization" a la hora de realizar cualquier peticion que no sea login o registro)
                registro de los usuarios

        middleware -->
            *handleError contiene la funcion para el manejo de todos los errores

            *userControl contiene tres funciones de middleware 
                verifyUser(verificar que las credenciales de acceso del usuario sean validas (coincidan con un usuario registrado en el sistema) para el login) 
                verifyNewUser(verificar que las credenciales de un nuevo usuario sean validas (como por ejemplo que el email no se encuentre vinculado a otro usuario) para el registro)
                authUser: verifica que el token de acceso proporcionado por el usuario sea valido. Este middleware se utiliza como verificacion a la hora de realizar peticiones en personas.

    Carpeta config -->
        sql -->  
            *sql.js define la conexion a la db sql usando variables de entorno para una mayor modularización.
            *sqlSync.js define la función que establece la conexión con la db

            models -->
                persona.js define el modelo de persona para db sql

    *.env/.env.example: variables de entorno --- PARA USAR LA APP, CAMBIAR ESTAS VARIABLES.

                                                NOTA: Si la DB a usar no es "mysql", cambiar el dialect: "motorDBSql" en sql.js al motor de DB elegido. Aclaro por que este valor debe ser definido explicitamente, por lo tanto no puede ser definido en las variables de entorno


-------

    RUTAS DISPONIBLES (URL): (EL PUERTO ESTA DEFINIDO EN .env)
    USERS
        POST localhost:3001/users/register -- REGISTRO
        POST localhost:3001/users/login -- LOGIN (SI LAS CREDENCIALES DE ACCESO SON VALIDASENVIA EL TOKEN DE AUTORIZACION COMO RESPUESTA)

    PERSONAS (REQUIEREN TOKEN DE AUTORIZACION PROPORCIONADO AL LOGEARSE)
        GET localhost:3001/personas -- Listar todas
        GET localhost:3001/personas/id -- Encontrar una por id
        POST localhost:3001/personas -- Crear una persona
        PUT localhost:3001/personas/id -- Actualizar una persona
        DELETE localhost:3001/personas/id -- Eliminar una persona

    

