const { DataTypes } = require("sequelize");
const sequelize = require("../sql");
const bcrypt = require('bcryptjs');

const User = sequelize.define("User", {
   userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
   },

   email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
    }
   },

   password: {
    type: DataTypes.STRING,
    allowNull: false,
   }
}, 
{
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  });
  
  // Método para verificar la contraseña
  User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = User;