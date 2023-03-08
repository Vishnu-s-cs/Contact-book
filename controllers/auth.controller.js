const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const values = {
      firstName: req.body?.firstName,
      middleName: req.body?.middleName,
      lastName: req.body?.lastName,
      dob: req.body?.dob,
      email: req.body?.email,
      password: hashedPassword,
      phone: req.body?.phone,
      occupation: req.body?.occupation,
      company: req.body?.company
    }
    //create new user
    const newUser = new User(values);

    //save user and respond
    await newUser
      .save()
      .then((user) => {
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
      })
      .catch((err) => {
        res.status(400).json({ msg: "something not right", err });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.userLogin = async (req, res) => {
  try {
      const user = await User.findOne({
        email: req.body.email,
      });
      !user && res.status(404).json("user not found");

      if (user) {
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        !validPassword && res.status(400).json("wrong password");

        if (validPassword) {
          const accessToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.SECRET,
            { expiresIn: "7d" }
          );
          const { password, updatedAt, blocked, email, createdAt, ...other } =
            user._doc;
          res
            .cookie("accessToken", accessToken, {
              httpOnly: true,
            })
            .status(200)
            .json({ other, accessToken });
        }
      }
 
  } catch (err) {
    res.status(500).json(err);
  }
};


