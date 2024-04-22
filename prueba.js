const jwt = require('jsonwebtoken');
const { config } = require("dotenv");

config();
const token = jwt.sign({ userId: "hola" }, process.env.JWT_SECRET, { expiresIn: '1h' });
console.log(token);
