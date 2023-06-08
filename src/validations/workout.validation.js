import { body, validationResult } from "express-validator";

const workoutValidationRules = () => {
  return [body("name").exists(), body("type").exists()];
};

const validateWorkout = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];

  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

export const validationWorkout = {
  workoutValidationRules,
  validateWorkout,
};
