const { DataTypes } = require("sequelize");
const sequelize = require("../sql");

const Persona = sequelize.define("Persona",  {
    nombre: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    DNI: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    fechaNacimiento: {
        type: DataTypes.DATE, 
        allowNull: false
    }
});

module.exports = Persona