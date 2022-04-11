const login = (req, res) => {
  res.send("Login sucessful");
};

const register = (req, res) => {
  res.send("Registration sucessfult");
};

module.exports = {
  register,
  login,
};
