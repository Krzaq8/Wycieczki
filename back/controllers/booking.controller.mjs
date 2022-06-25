import database from "../database/getDatabase.mjs";
import { validationResult } from "express-validator";

const bookingController = {
  post: async (req, res, next) => {
		if (!req.session.user) {
			return res.status(400).json({ 
				login: false
			});
		}

		const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

		const tripId = req.body.trip;
		const tickets = req.body.tickets;
		const userId = req.session.user;

		const transaction = await database.sequelize.transaction();

		try {
			console.log(`tripId: ${tripId}`);
			const ticketsLeft = await database.Trip
				.findByPk(tripId)
				.then((trip) => trip.tickets_left - tickets);
			console.log(`tickets left: ${ticketsLeft}`);
			
			await database.Trip.update(
				{ tickets_left: ticketsLeft },
				{ 
					where: { id: tripId }, 
					transaction: transaction
				});

			await database.Reservation.create({
				tickets: tickets,
				TripId: tripId,
				UserId: userId
			}, { transaction: transaction });

			await transaction.commit();
			res.status(200).json({ result: true });
		}
		catch {
			await transaction.rollback();
			res.status(200).json({ result: false });
		}

  }
};

export default bookingController;