const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Listing = require("../models/Listing");
const protect = require("../middleware/auth");

router.post("/", protect, async (req, res) => {
  try {
    const { listingId, checkIn, checkOut, guests } = req.body;
    if (!listingId || !checkIn || !checkOut || !guests) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide all required fields" });
    }
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkInDate >= checkOutDate) {
      return res.status(400).json({
        success: false,
        error: "Check-out date must be after check-in date",
      });
    }
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res
        .status(404)
        .json({ success: false, error: "Listing not found" });
    }
    if (guests > listing.maxGuests) {
      return res.status(400).json({
        success: false,
        error: `Number of guests exceeds maximum allowed (${listing.maxGuests})`,
      });
    }
    const overlapping = await Booking.findOne({
      listing: listingId,
      checkIn: { $lt: checkOutDate },
      checkOut: { $gt: checkInDate },
    });
    if (overlapping) {
      return res.status(400).json({
        success: false,
        error: "Listing is not available for the selected dates",
      });
    }

    const nights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
    );
    const totalPrice = nights * listing.price;

    const booking = await Booking.create({
      listing: listingId,
      user: req.userId,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: guests,
      totalPrice: totalPrice,
    });
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/my", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId }).populate(
      "listing",
      "title location price",
    );
    res.json({ sucess: true, count: bookings.length, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res
        .status(404)
        .json({ success: false, error: "Booking not found" });
    }
    if (booking.user.toString() != req.userId) {
      return res.status(403).json({ success: false, error: "Unauthorized" });
    }
    await booking.deleteOne();
    res.json({ success: true, message: "booking cancelled" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
