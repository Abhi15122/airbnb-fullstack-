require("dotenv").config();
const express = require("express");
const listingsRouter = require("./routes/listings");
const cors = require("cors");
const authRouter = require("./routes/auth");
const bookingRouter = require("./routes/bookings");
const app = express();

const connectDb = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDb();
app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRouter);

app.get("/", (req, res) => {
  res.json({ message: "clone-bnb api is running" });
});

app.use(`/api/listings`, listingsRouter);
app.use(`/api/auth`, authRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
