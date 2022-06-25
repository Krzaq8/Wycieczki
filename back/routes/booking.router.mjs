import express from "express";
import { body } from "express-validator";
import bookingController from "../controllers/booking.controller.mjs";

const bookingRouter = express.Router();

bookingRouter.post(
	'/',
	body('tickets')
		.custom((value) => value > 0)
		.withMessage('Liczba biletów musi być większa od 0.'),
	
	bookingController.post);

export default bookingRouter;
