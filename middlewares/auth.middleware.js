const authRequire = (req, res, next) => {
  const body = req.body;

  if (body.username !== "Jake" || body.password !== "secreet") {
    return res.send("Invalid credential");
  }
  next();
};

module.exports = {
  authRequire,
};
