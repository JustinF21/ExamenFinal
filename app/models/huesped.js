module.exports = (sequelize, Sequelize) => {
	const Huesped = sequelize.define('huesped', {	
	  id_huesped: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	  },
	  nombre: {
			type: Sequelize.STRING
	  },
	  apellido: {
			type: Sequelize.STRING
  	},
	  documento_identidad: {
			type: Sequelize.STRING
	  },
	  telefono: {
			type: Sequelize.STRING
    },
    correo_electronico: {
      type: Sequelize.STRING
    },
    habitacion: {
      type: Sequelize.INTEGER
    }
	});
	
	return Huesped;
}
