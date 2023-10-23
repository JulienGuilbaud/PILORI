function addUserData(req, res, next) {
  if (req.session.isLogged) {
    res.locals.isLogged = true;
  }
  else {
    res.locals.isLogged = false;
  }
  next();
}

export default addUserData;