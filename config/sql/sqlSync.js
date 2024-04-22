const sequelize = require('./sql');

async function sincronizarBaseDeDatosSQL() {
  try {
    await sequelize.sync({ force: false });
    console.log('¡La base de datos ha sido sincronizada!');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
}

module.exports = { sincronizarBaseDeDatosSQL };
