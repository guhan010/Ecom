import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/mobilesRoute.js";
import pizza from "./routes/restaurantRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/mobiles", router);
app.use("/dominos", pizza);

app.listen(3000);
mongoose
  .connect(
    "mongodb+srv://skct_node:Skct12345@cluster0.0mf4v.mongodb.net/sample_restaurants?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
