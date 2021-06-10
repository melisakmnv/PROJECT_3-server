const bcrypt = require("bcrypt"); 
const UserModel = require('../models/user.model');

const salt = 10;

exports.signIn = (req, res, next) => {
  const { email, password } = req.body;

  UserModel.findOne({ email })
    .then((userDocument) => {
      if (!userDocument) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const isValidPassword = bcrypt.compareSync(
        password,
        userDocument.password
      ); 

      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      req.session.currentUser = userDocument._id;
      res.redirect("/api/auth/isLoggedIn");
    })
    .catch(next);
};


exports.signUp = (req, res, next) => {
  const { username, email, password } = req.body;
  UserModel.findOne({ email })
    .then((userDocument) => {
      if (userDocument) {
        return res.status(400).json({ message: "Email taken" });
      }

      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = { username, email, password: hashedPassword };

      UserModel.create(newUser)
        .then((newUserDocument) => {
          req.session.currentUser = newUserDocument._id;
          res.redirect("/api/auth/isLoggedIn");
        })
        .catch(next);
    })
    .catch(next);
};


exports.isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    UserModel.findById(req.session.currentUser)
      .select("-password")
      .then((userDocument) => {
        res.status(200).json(userDocument);
      })
      .catch(next);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};


exports.signOut = (req, res, next) => {
  if (req.session.currentUser) {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.sendStatus(204);
    });
  } else {
    res.status(400).json({ message: "no session" });
  }
};
