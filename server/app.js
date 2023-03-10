const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');
const path = require('path');
const appRoutes = require('./routes/app.routes');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const { authMiddleware } = require('./middlewares/authMiddleware');

require("dotenv").config();
require("./database");
const initConnectionDatabase = require("./databaseSql");

app.listen(app.get("PORT"), () => {
  console.log(`Server on port: http://localhost:${app.get("PORT")}`);
  initConnectionDatabase();
});


app.set('PORT', config.PORT || 3000);
app.set('secret', config.secretKey);

// session 
app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(flash());

  // globals
  app.use((req, res, next) => {
    res.locals.logData = req.flash('logData');
    next();
  });
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());
  app.use(
  express.urlencoded({
    extended: false,
  })
);

// rutas de la API
app.use('/api/v1', appRoutes);

// CONEXION con el BUILD de React
app.use(express.static(path.join(__dirname, "../client/build")));

const clientRoute = path.join(__dirname, "../client/build");

app.get("/Dashboard",authMiddleware, (req, res) => {
  res.sendFile(clientRoute + "/index.html");
});

app.get("/*",  (req, res) => {
  res.sendFile(clientRoute + "/index.html");
});


module.exports = app;
