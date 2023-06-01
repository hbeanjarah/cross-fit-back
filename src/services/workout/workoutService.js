import database from "../../database/workout/workout.js";
const getWorkouts = () => {
  return database.getAllWorkouts();
};

const getWorkoutById = () => {
  return;
};

const createWorkout = () => {
  return;
};

const updateWorkout = () => {};

const deleteWorkout = () => {};

const workoutServices = {
  createWorkout,
  deleteWorkout,
  getWorkoutById,
  getWorkouts,
  updateWorkout,
};

export default workoutServices;
