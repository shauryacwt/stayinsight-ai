const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const {
  register,
  login,
} = require("../controllers/authController");

const validate = require("../middleware/validate");
const authLimiter = require("../middleware/rateLimiter");

const {
  registerValidation,
  loginValidation,
} = require("../validation/authValidation");

router.post(
  "/register",
  authLimiter,
  registerValidation,
  validate,
  register
);

router.post(
  "/login",
  authLimiter,
  loginValidation,
  validate,
  login
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user.id,
        email: req.user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.redirect(`http://localhost:5173/login?token=${token}`);
  }
);
module.exports = router;