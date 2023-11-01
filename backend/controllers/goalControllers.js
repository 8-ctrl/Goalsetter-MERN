const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Goal = require("../models/goalModel");
const { protect } = require("../middleware/authMiddleware");

//desc@ Get goals
//route@ get /api/goals
//access@ Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id }); // req.user.id not working as expected
  res.json(goals);
  console.log(req.user);
  // console.log(req.user.id)
});

//desc@ Set goals
//route@ Post /api/goals
//access@ Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text feild");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.json(goal);
});

//desc@ Upadte goals
//route@ Put /api/goals
//access@ Private
const upadateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);

  if (user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() != user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }

  const upadtedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(upadtedGoal);
});

//desc Delete goals
//route delete /api/goals
//access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  console.log(req.user.id);
  const user = await User.findById(req.user.id);

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() != user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  upadateGoal,
  deleteGoal,
};
