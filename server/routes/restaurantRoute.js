import express from "express";
import { Restaurant } from "../model/Restuarants.js";

const router = express.Router();

router.get("/pizza", async (req, res) => {
  const data = await Restaurant.find();
  res.json(data);
});

router.post("/pizza", async (req, res) => {
  const new_data = await new Restaurant(req.body);
  new_data.save();
  res.json(new_data);
});

router.put("/pizza/:id", async (req, res) => {
  const data = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(data);
});

router.get("/pizza/:ideee", async (req, res) => {
  //   console.log(req);
  const data = await Restaurant.findById(req.params.ideee);
  res.json(data);
});
router.delete("/pizza/:ideee", async (req, res) => {
  //   console.log(req);
  const data = await Restaurant.findByIdAndDelete(req.params.ideee);
  res.send("id deleted");
});

export default router;
