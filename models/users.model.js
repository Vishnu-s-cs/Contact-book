const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
      trim: true,
      text: true,
    },
    middleName: {
      type: String,
      trim: true,
      text: true,
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
      trim: true,
      text: true,
    },

    password: {
      type: String,
      required: [true, "password is required"],
      trim: true,
      text: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
      trim: true,
      unique: true,
    },
    dob: {
      type: Date,
      trim: true,
    },
    occupation: {
      type: String,
      trim: true,
      text: true,
    },
    company: {
      type: String,
      trim: true,
      text: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
