const authCtrl = {};
const User = require("../models/User");
const { comparePassword, getHashedPassword } = require("../helpers/handlePassword");
const { getJsonWebToken } = require("../helpers/handleJWT");
const { setCookie } = require("../helpers/handleCookie");

authCtrl.handleLogin = async (req, res, next) => {
  try {

    req.session.login = req.body

    const { userMail, userPassword } = req.body;
    const user = await User.findOne({ userMail });

    if (!user) {
      res.status(401);
      return res.json({ error: "User not registered: Sign Up first" });
    }

    const isAuthorized = await comparePassword(userPassword, user.userPassword);


    if (!isAuthorized) {
      res.status(401);
      return res.json({ error: "User not authorized : Wrong Credentials" });
    }

    const payload = {
      email: user.userMail,
      name: user.userName,
    };


    const token = getJsonWebToken(payload);


    setCookie(req, token);

    res.status(201);
    return res.json({message: "Logged In Successfully", body: token})

  } catch (error) {
    console.log(error);
    res.status(500);
    return res.json({ error });
  }
};

module.exports = authCtrl;
