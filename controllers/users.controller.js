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

//user update
exports.updateUser = async (req, res) => {

  if (req.body.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Account has been updated");
  } catch (err) {
    return res.status(500).json(err);
  }
}

//delete contact
exports.deleteUser=async (req, res) => {
    
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }

}