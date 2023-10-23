import express from 'express';
import cors from 'cors';
import session from 'express-session';
import * as dotenv from 'dotenv';
import router from './app/router.js';
import addUserData from './app/middlewares/addUserData.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

// ce middleware parse le corps de la requête s'il est au format urlencoded pour alimenter req.body
// le format urlencoded est celui utilisé quand on génère une requête via un formulaire
app.use(express.urlencoded({ extended: true }));
// ce middleware parse le corps de la requête s'il est au format json pour aliment req.body
// le format json est souvent utilisé par les développeur quand ils font appel à une api rest
app.use(express.json());
app.use(express.static('./public'));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: process.env.SECRET_POUR_EXPRESS_SESSION
}));

app.use(addUserData);

app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
