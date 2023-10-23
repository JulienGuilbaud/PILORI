import client from "../database.js";

const mainController = {

  home: async function(req, res) {
    try {
      const result = await client.query('SELECT * FROM "website" ORDER BY id DESC LIMIT 3');
      res.render('home', {
        websites: result.rows,
      });
    } catch(error) {
      console.error(error);
      res.status(500).render('error');
    }
  },

  legals: function(req, res) {
    res.render('coming-soon', {
      title: 'Mentions légales',
    });
  },

  plan: function(req, res) {
    res.render('coming-soon', {
      title: 'Plan du site',
    });
  },

  contact: function(req, res) {
    res.render('coming-soon', {
      title: 'Contact',
    });
  },

  notFound: function(req, res) {
    res.status(404).render('error', {
      message: 'La page demandée n\'a pas été trouvée.',
    });
  }

};

export default mainController;
