import database from "../database/getDatabase.mjs";
import pkg from 'sequelize';
const { Op } = pkg;

const homeController = {
  get: (req, res) => {
		database.Trip
			.findAll({
				order: [
					['beg_date', 'ASC']
				],
				where: {
					beg_date: {
						[Op.gt]: database.sequelize.literal('CURRENT_DATE')
					}
				}
			})
			.then((trips) =>
				res.status(200).json(trips)
			);
  }
};

export default homeController;