import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  brandName: String,
  modelName: String,
  price: Number,
  ram: Number,
  storage: Number,
  battery: Number,
  availability: Boolean,
  image: String,
});

export const Mobiles = mongoose.model("mobile", schema);
