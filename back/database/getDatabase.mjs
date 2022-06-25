import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import { reservationModel } from "./reservationModel.mjs";
import { tripModel } from "./tripModel.mjs";
import { userModel } from "./userModel.mjs";

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

async function getDatabase() {
	try {
	  await sequelize.authenticate();
	  console.log(
	    "Connection to the database has been established successfully."
	  );
      
	  const db = {};
	  db.sequelize = sequelize;
      
	  db.Trip = tripModel(sequelize, DataTypes);
	  db.Reservation = reservationModel(sequelize, DataTypes);
	  db.User = userModel(sequelize, DataTypes);
      
	  db.Trip.hasMany(db.Reservation, {
	    foreignKey: "TripId",
	  }); 
		db.Reservation.belongsTo(db.Trip, {
	    foreignKey: "TripId",
		});

	  db.User.hasMany(db.Reservation, {
	    foreignKey: "UserId",
	  }); 
		db.Reservation.belongsTo(db.User, {
	    foreignKey: "UserId",
		});
      
	  await db.sequelize.sync();
      
	  return db;
	} catch (error) {
	  console.error(error.message);
	  throw error;
	}
}

const database = await getDatabase();

export default database;