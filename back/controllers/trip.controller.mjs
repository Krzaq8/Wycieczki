import database from "../database/getDatabase.mjs";

const tripController = {
  get: function(req, res, next) {
		console.log(req.params.id);
		database.Trip
			.findByPk(req.params.id)
			.then((trip) => res.status(200).json(trip))
			.catch(() => next(404));
  }
};

export default tripController;