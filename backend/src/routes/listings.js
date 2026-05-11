const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");

router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json({
      success: true,
      count: listings.length,
      data: listings,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res
        .status(404)
        .json({ success: false, error: "Listing not found" });
    }
    res.json({ success: true, data: listing });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
