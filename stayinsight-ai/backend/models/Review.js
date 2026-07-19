const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    sentiment: {
      type: String,
      required: true,
    },

    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);