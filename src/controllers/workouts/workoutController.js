import workoutServices from "../../services/workout/workoutService.js";

export const getWorkouts = (req, res) => {
  const workouts = workoutServices.getWorkouts();
  res.send({ status: "OK", data: workouts });
};

export const getWorkoutById = (req, res) => {
  const workout = workoutServices.getWorkoutById();
  res.send("Get workout by id");
};

export const createWorkout = (req, res) => {
  const workout = workoutServices.createWorkout();
  res.send("create a new workout");
};

export const updateWorkout = (req, res) => {
  const workout = workoutServices.updateWorkout();
  res.send("update workout by id");
};

export const deleteWorkout = (req, res) => {
  const workout = workoutServices.deleteWorkout();
  res.send("delete workout by id");
};
