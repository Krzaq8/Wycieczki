import database from "../database/getDatabase.mjs";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

const registrationController = {
  post: async (req, res) => {
		const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

		const hash = await bcrypt.hash(req.body.password, 8);
		const user = await database.User.create({
			name: req.body.name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: hash
		});
		req.session.user = user.id;

		res.status(200).json({ 
			login: true 
		});
  }
};

export default registrationController;