import db from "../db.json" assert { type: 'json' };

const getAllWorkouts = () => db.workouts;

const workoutData = {
  getAllWorkouts,
};

export default workoutData;
