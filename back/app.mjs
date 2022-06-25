import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import homeRouter from "./routes/home.router.mjs";
import tripRouter from "./routes/trip.router.mjs";
import bookingRouter from "./routes/booking.router.mjs";
import loginRouter from "./routes/login.router.mjs";
import registrationRouter from "./routes/registration.router.mjs";
import reservationsRouter from "./routes/reservations.router.mjs";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
	credentials: true,
	origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.set('trust proxy', 1);
app.use(
  session({
    secret: "super secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/home', homeRouter);
app.use('/trip', tripRouter);
app.use('/booking', bookingRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/reservations', reservationsRouter);

app.post('/logout', (req, res) => {
	req.session.destroy();
	return res.status(200).json({ logout: true });
})

app.use((err, req, res, next) => {
  res.send(`Ta strona nie istnieje!<br>\nKod błędu: ${err}\n`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});