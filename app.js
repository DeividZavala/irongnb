require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const propertiesRouter = require("./routes/property");
const reservationsRouter = require("./routes/reservation");
app.use("/api/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/properties", propertiesRouter);
app.use("/api/reservations", reservationsRouter);
// aqui va mi nueva ruta que cree
<<<<<<< HEAD
const petsRouter = require('./routes/pets')
app.use("/api/pets",petsRouter)
=======
// este es otro cambio en el appjs

>>>>>>> 2d7f7378d03c3f2a4f65fd06b4d1a11a08383142
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
