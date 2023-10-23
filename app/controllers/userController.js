import User from "../models/User.js";

const userController = {
  
  profil: async function(req, res) {
    try {
      const user = await User.read(req.session.userId);
      res.render('profil', { user: user });
    }
    catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
  },

};

export default userController;
