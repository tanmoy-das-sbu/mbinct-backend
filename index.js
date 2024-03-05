import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import resultRoute from "./routes/resultRoutes.js"
import cors from "cors"

const app = express();
app.use(express.json());


app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders:['Content-Type'],
}))
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome");
});

app.use("/results", resultRoute)
app.use("/admit", resultRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas", err);
  });
