export function reservationModel(sequelize, DataTypes) {
  const Reservation = sequelize.define("Reservation", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
	{
		tableName: 'reservations'
	});
  return Reservation;
}