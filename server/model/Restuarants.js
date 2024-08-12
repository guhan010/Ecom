import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  address: Object,
  borough: String,
  cuisine: String,
  grades: Array,
  name: String,
  restaurant_id: String,
});

export const Restaurant = mongoose.model("Restaurant", schema, "restaurants");
