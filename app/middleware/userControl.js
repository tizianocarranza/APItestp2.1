const User = require("../../config/sql/models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

//Autenticar el usuario por sus credenciales (login)
const verifyUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log(email, password);
             
        const user = await User.findOne({ where: { email } });
        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        };
        
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        next();
    }

    catch(error)
    {
        next(error);
    }
}

//Verificar que las credenciales de registro sean validas y no exista otro igual (register)
const verifyNewUser = async (req, res, next) => {
    try
    {
        const { userName, email, password} = req.body;

        if(!userName || !email || !password)
        {
            res.status(400).json({message: "Debe ingresar userName, email y password"});
        }

        let user = await User.findOne({ where: { userName } });
        if(user)
        {
            return res.status(400).json({ message: 'El nombre de usuario ya existe' });
        }

        user = await User.findOne({ where: { email } });
        if(user)
        {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
        }

        next();
    }
    catch(error)
    {
        next(error);
    }
};

const authUser = (req, res, next) =>
{
    const token = req.headers.authorization;

    if (!token) 
    {
        return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
    }

    try 
    {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        
        next();
    } 

    catch (error) 
    {
        next(error);
    }
}

module.exports = { verifyUser, verifyNewUser, authUser }