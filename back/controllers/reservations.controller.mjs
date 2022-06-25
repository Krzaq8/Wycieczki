import database from "../database/getDatabase.mjs";

const reservationsController = {
  get: async (req, res) => {
		if (!req.session.user) {
			return res.status(400).json({ 
				login: false
			});
		}

		const reservations = await database.Reservation.findAll({
			attributes: ['tickets', 'id'],
			include: {
				model: database.Trip,
				attributes: ['head', 'beg_date', 'end_date']
			},
			where: {
				UserId: req.session.user
			}
		});

		res.status(200).json(reservations);
  }
};

export default reservationsController;
