import express from "express";
import reservationsController from "../controllers/reservations.controller.mjs";

const reservationsRouter = express.Router();

reservationsRouter.get('/', reservationsController.get);

export default reservationsRouter;
