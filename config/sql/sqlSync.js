const sequelize = require('./sql');
const Persona = require('./models/persona');

async function sincronizarBaseDeDatosSQL() {
  try {
    await sequelize.sync({ force: true });
    console.log('¡La base de datos ha sido sincronizada!');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
}

module.exports = { sincronizarBaseDeDatosSQL };
