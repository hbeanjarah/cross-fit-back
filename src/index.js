import express from "express";
import workoutRoutes from "./v1/routes/workouts/workoutRoutes.js";
const app = express();

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.send("<h2>It's working</h2>");
});

app.use("/api/v1/workouts", workoutRoutes);
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
