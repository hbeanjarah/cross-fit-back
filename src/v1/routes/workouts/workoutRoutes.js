import express from "express";
import {
  getWorkoutById,
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../../../controllers/workouts/workoutController.js";
const router = express.Router();

router.get("/", getWorkouts);

router.get("/:workoutId", getWorkoutById);

router.post("/", createWorkout);

router.patch("/:workoutId", updateWorkout);

router.delete("/:workoutId", deleteWorkout);

export default router;
