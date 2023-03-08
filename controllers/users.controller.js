const User = require("../models/users.model");


//taking users from db by id

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

//taking all users from the db

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find({}, { password: 0 });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
