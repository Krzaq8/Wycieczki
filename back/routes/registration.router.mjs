import express from "express";
import { body } from "express-validator";
import database from "../database/getDatabase.mjs";
import registrationController from "../controllers/registration.controller.mjs";

const registrationRouter = express.Router();

registrationRouter.post(
	'/',
	body('name')
		.isLength({ min: 1 })
		.withMessage('Imię nie może być puste.'),
	body('last_name')
		.isLength({ min: 1 })
		.withMessage('Nazwisko nie może być puste.'),
	body('email')
		.isEmail()
		.withMessage("To nie jest email.")
		.custom(async (value) => {
			if (await database.User.count({ where: { email: value } }) === 1) {
				throw new Error('Użytkownik o tym emailu już istnieje.');
			}
			return true;
		}),
	body('password')
		.isLength({ min: 8 })
		.withMessage('Hasło musi mieć przynajmniej 8 znaków.'),
	body('password2')
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error('Podane hasła się różnią.');
			}
			return true;
		}),
	registrationController.post);

export default registrationRouter;
