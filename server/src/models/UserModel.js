const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'Please enter your name!'],
      trim: true,
    },
    email: {
      type: String,
      require: [true, 'Please enter your email!'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: [true, 'Please enter your password!'],
    },
    faculty: {
      type: String,
      require: [true, 'Please enter your faculty!'],
    },
    position: {
      type: String,
      require: [true, 'Please enter your position!'],
    },
    role: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/nikitababko/image/upload/v1616588775/Avatars/avatar_g5b8fp.png',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', UserSchema);
