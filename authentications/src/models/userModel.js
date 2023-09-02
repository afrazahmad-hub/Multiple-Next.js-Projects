import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a user name."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
  },
  isVerified: {
    type: boolean,
    default: false,
  },
  isAdmin: {
    type: boolean,
    default: false,
  },
  isAdmin: {
    type: boolean,
    default: false,
  },
  forgetPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.models("users", userSchema);
export default User;
