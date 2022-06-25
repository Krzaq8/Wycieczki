import express from "express";
import tripController from "../controllers/trip.controller.mjs";

const tripRouter = express.Router();

tripRouter.get('/:id', tripController.get);

export default tripRouter;
