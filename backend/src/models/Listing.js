const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  author: { type: String, required: true },
  date: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const hostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isSuperhost: { type: Boolean, required: true },
  joinYear: { type: Number, required: true },
});

const listingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    maxGuests: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    beds: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    description: { type: String },
    amenities: [String],
    host: hostSchema,
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Listing", listingSchema);
