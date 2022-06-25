import express from "express";
import { body } from "express-validator";
import loginController from "../controllers/login.controller.mjs";
import database from "../database/getDatabase.mjs";
import bcrypt from "bcrypt";

const loginRouter = express.Router();

loginRouter.post(
	'/',
	body('email')
		.isEmail()
		.withMessage("To nie jest email.")
		.custom(async (value) => {
			if (await database.User.count({ where: { email: value } }) === 0) {
				throw new Error('Użytkownik o tym emailu nie istnieje.');
			}
		}),
	body('password')
		.custom(async (value, { req }) => {
			const user = await database.User.findOne({
				where: {
					email: req.body.email
				}
			});
		
			if (!(await bcrypt.compare(value, user.password))) {
				throw new Error('Hasło niepoprawne.');
			}
		})
		.withMessage('Hasło niepoprawne.'),
	loginController.post);

export default loginRouter;
