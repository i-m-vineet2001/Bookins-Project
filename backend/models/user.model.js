import mongoose from "mongoose";
import { createHmac, randomBytes } from "crypto";
import { createTokenForUser } from "../modules/auth.module.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      set: value => value.toLowerCase(),
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Hash password before saving user
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next(); // Ensure `next()` is called

  const salt = randomBytes(16).toString("hex"); // Proper string conversion
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  user.salt = salt;
  user.password = hashedPassword;
  next();
});

// Match password and generate token
userSchema.statics.matchPasswordandGenerateToken = async function (email, password) {
  try {
    const user = await this.findOne({ email });

    if (!user) throw new Error("User not found!");

    const userProvidedHash = createHmac("sha256", user.salt)
      .update(password)
      .digest("hex");

    if (user.password !== userProvidedHash) throw new Error("Incorrect Password");

    return createTokenForUser(user);
  } catch (error) {
    throw new Error(error.message);
  }
};

const User = mongoose.model("user", userSchema);
export default User;
