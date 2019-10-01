const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization == 'Bearer awidnfo8awhfL23TR'

  //returns err if auth not found
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  // extracts token from auth
  const token = authorization.replace("Bearer ", "");
  // verifies token
  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }
    // extracts userId from payload
    const { userId } = payload;

    // tells mongoose to look up user from mongo
    const user = await User.findById(userId);
    //assigns user to req obj on user property
    req.user = user;
    next();
  });
};
