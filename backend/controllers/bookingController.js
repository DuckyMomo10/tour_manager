import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Booking created successfully",
      data: savedBooking,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Booking error" });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    res.status(200).json({ success: true, message: "successful", data: book });
  } catch (error) {
    res.status(404).json({ success: false, message: "Booking not found" });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({ success: true, message: "successful", data: books });
  } catch (error) {
    res.status(404).json({ success: false, message: "Booking not found" });
  }
};
