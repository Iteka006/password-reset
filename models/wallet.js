const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  balance: {
    type: String,
    default: 0,
  },
});


module.exports = mongoose.model('Wallet', WalletSchema)