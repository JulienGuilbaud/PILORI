import validator from 'validator';
import bcrypt from 'bcrypt';
import User from "../models/User.js";
import client from '../database.js';

const authController = {
  
  login: function(req, res) {
    res.render('login');
  },
  
  loginAction: async function(req, res) {
    try {
      // on cherche un user par son email
      const foundUser = await client.query('SELECT * FROM "user" WHERE "email" = $1', [req.body.email]);
      if (foundUser.rowCount > 0) {
        const user = foundUser.rows[0];
        // si on a trouvé on check le mot de passe, à noter qu'on a utilisé la syntaxe async await avec bcrypt, bien plus sympa
        const result = await bcrypt.compare(req.body.password, user.hash);
        if (result) {
          // si c'est ok on est connecté
          req.session.isLogged = true;
          req.session.userId = user.id; 
          res.redirect('/profil');
        }
        else {
          res.render('login', { alert: 'Mauvais couple identifiant/mot de passe' });
        }
      }
      else {
        throw new Error('Mauvais couple identifiant/mot de passe');
      }
    } catch (error) {
      console.error(error);
      res.render('login', { alert: error.message });
    }
  },
  
  signup: function(req, res) {
    res.render('register');
  },
  
  signupAction: async function(req, res) {
    try {
      // on valide le mot de passe
      const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
      if (!validator.isStrongPassword(req.body.password, options)) {
        throw new Error('Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
      }
      // on crée le hash
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.hash = hash;
      // on crée un objet user
      const user = new User(req.body);
      // qu'on fait persister en bdd
      await user.create();
      // pour que l'utilisateur reste connecté on le mémorise en session
      req.session.isLogged = true;
      req.session.userId = user.id;
      res.redirect('/profil');
    } catch (error) {
      console.error(error);
      res.render('register', { alert: error.message });
    }
  },
  
  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/');
  },

};

export default authController;
