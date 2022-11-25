const mongoose = require("mongoose");

const ProductLinkSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  confirmationType: {
    type: String,
  },
  redirectUrl: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
},
  paymentLink: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});

module.exports = mongoose.model("ProductLink", ProductLinkSchema);
