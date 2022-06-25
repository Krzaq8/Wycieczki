import { validationResult } from "express-validator";
import database from "../database/getDatabase.mjs";

const loginController = {
  post: async (req, res) => {
		const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

		const user = await database.User.findOne({
			where: { email: req.body.email	}
		})
		req.session.user = user.id;

		res.status(200).json({ 
			login: true
		});
  }
};

export default loginController;