import express from "express";

const router1 = express.Router();

router1.get("/s23", (req, res) => {
  res.send("<h1>s23 page</h1>");
});
router1.get("/s22", (req, res) => {
  res.send("<h1>s22 page</h1>");
});
router1.get("/s23pro", (req, res) => {
  res.send("<h1>s23pro page</h1>");
});

export default router1;
