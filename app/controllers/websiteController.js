import Website from "../models/Website.js";
import client from '../database.js';

const websiteController = {

  all: async function(req, res) {
    try {
      if (req.query.keywords) {
        const filteredWebsites = await client.query('SELECT * FROM website WHERE title ILIKE $1', [`%${req.query.keywords}%`]);
        if (filteredWebsites.rowCount > 0) {
          res.render('list', {
            title: 'Résultat de la recherche',
            websites: filteredWebsites.rows,
          });
        }
        else {
          res.render('list', {
            title: 'Aucun résultat',
            websites: [],
          });
        }
      }
      else {
        const websites = await client.query('SELECT * FROM website ORDER BY id DESC');
        res.render('list', {
          title: 'Toutes les tomates',
          websites: websites.rows,
        });
      }
    } catch(error) {
      res.status(500).render('error');
    }
  },

  form: function(req, res) {
    res.render('add-site');
  },

  formAction: async function(req, res) {
    try {
      const website = new Website(req.body);
      await website.create();
      res.redirect('/tomates/' + website.slug);
    } catch (error) {
      res.render('add-site', {
        message: error.message,
      });
    }
  },

  details: async function(req, res, next) {
    try {
      // const slug = req.params.slug;
      // Le destructuring d'objet permet d'assigner dans des variables les valeurs des propriétés de même nom issues d'un objet
      // a droite du = on écrit le nom de l'objet dans lequel on va piocher des valeurs
      // à gauche du = on écrit entre {} la liste des propriétés qu'on veut extraire dans des variables de même nom
      const { slug } = req.params;
      const result = await client.query("SELECT * FROM website WHERE slug = $1", [slug]);
      if (result.rowCount > 0) {
        res.render('detail', {
          website: result.rows[0],
        });
      }
      else {
        next();
      }
    } catch(error) {
      console.error(error);
      res.status(500).render('error');
    }
  },

  allJson: async function(req, res) {
    try {
      // notre serveur préparer des données
      const result = await client.query('SELECT * FROM website');
      // et renvoie une réponse en json
      res.json(result.rows);
    } catch(error) {
      console.error(error);
      // y compris en cas d'erreur
      res.status(500).json({
        message: 'Le serveur a rencontré un problème.',
      });
    }
  },

  detailsJson: async function(req, res) {
    try {
      // const id = req.params.id;
      const { id } = req.params;
      // en fonction de la requête, on prépare des données
      const result = await client.query('SELECT * FROM website WHERE id = $1', [id]);
      if (result.rowCount > 0) {
        // qu'on renvoie en json
        res.json(result.rows[0]);
      }
      else {
        // y compris pour le cas d'erreur
        res.status(404).json({
          message: 'Le site demandé n\'existe pas.',
        });
      }
    } catch(error) {
      console.error(error);
      res.status(500).json({
        message: 'Le serveur a rencontré un problème.',
      });
    }
  },

  delete: async function(req, res) {
    try {
      // partant de l'id demandé
      const { id } = req.params;
      // notre intention est de supprimer la ligne correspondante en base de données
      // soit on écrit notre requête de suppression à la main
      // const result = await client.query('DELETE FROM website WHERE id = $1', [id]);
      // soit via nos méthodes active record
      // on récupère le site demandé
      const website = await Website.read(id);
      // qu'on supprime
      const result = await website.delete();
      // si la suppresion a eu lieu
      if (result.rowCount > 0) {
        // on la confirme dans la réponse
        res.json({
          message: 'website supprimé',
        });
      }
      // si rien n'a été supprimé
      else {
        // c'est que le site n'existait donc on envoie une réponse adapté
        res.status(404).json({
          message: 'Le site demandé n\'existe pas.',
        });
      }
    } catch(error) {
      console.error(error);
      res.status(500).json({
        message: 'Le serveur a rencontré un problème.',
      });
    }
  },

  create: async function(req, res) {
    try {
      // on valide les données reçues
      const website = new Website(req.body);
      // on sauvegarde le site créé
      await website.create();
      // on envoie une réponse contenant les infos de la ressource créé
      res.json({
        title: website.title,
        description: website.description,
        address: website.address,
        level: website.level,
        device: website.device,
        id: website.id,
        slug: website.slug,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error.message,
      });
    }
  },

  update: async function(req, res) {
    try {
      // partant de l'id demandé
      const { id } = req.params;
      // on récupère le site demandé
      const website = await Website.read(id);
      // on modifie ses propriété en fonction de ce qui a été envoyé
      if (req.body.title) {
        website.title = req.body.title;
      }
      if (req.body.description) {
        website.description = req.body.description;
      }
      if (req.body.address) {
        website.address = req.body.address;
      }
      if (req.body.level) {
        website.level = req.body.level;
      }
      if (req.body.device) {
        website.device = req.body.device;
      }
      // on sauvegarde la mise à jour
      await website.update();
      // on envoie une réponse contenant les infos de la ressource modifiée
      res.json({
        title: website.title,
        description: website.description,
        address: website.address,
        level: website.level,
        device: website.device,
        id: website.id,
        slug: website.slug,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error.message,
      });
    }
  },

};

export default websiteController;
