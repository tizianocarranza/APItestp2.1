const User = require("../../config/sql/models/users");
const { config } = require("dotenv");
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => { 
    try 
    {
        const email = req.body.email;
        const user = await User.findOne({ where: { email } });

        config();
        
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token }); 
    } 
    catch (error) 
    {
        next(error)
    }
};

const register = async (req, res, next) => {
    try
    {
        const { userName, email, password } = req.body;

        user = await User.create({
            userName: userName,
            email: email, 
            password: password
        });

        res.status(201).json({ message: "Usuario registrado con éxito."});
    }
    catch(error)
    {
        next(error);
    }

}

module.exports = { login, register };  