const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const WalletSchema = new mongoose.Schema({
  balance: {
    type: String,
    default: 0,
  },
});

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  
  role: {
    type: String, 
    enum: ['user', 'admin'],
    default:'user'
  },

  active:{
    type: Boolean, 
    default: false
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')){
    console.log('password has been modified')
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash 
  }
  
  //hash the plain text password
  next() 
})

module.exports = mongoose.model("User", UserSchema);
