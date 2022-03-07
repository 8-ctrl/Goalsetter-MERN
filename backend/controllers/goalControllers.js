const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
//desc@ Get goals
//route@ get /api/goals
//access@ Private

const getGoals = asyncHandler(async (req, res) =>{
    const goals = await Goal.find()
res.json(goals)
})

//desc@ Set goals
//route@ Post /api/goals
//access@ Private

const setGoal = asyncHandler(async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text feild')
    }
    const goal = await Goal.create({
        text: req.body.text
    })

    res.json(goal)
})

//desc@ Upadte goals
//route@ Put /api/goals
//access@ Private

const upadateGoal = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const upadtedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.json(upadtedGoal)
})

//desc Delete goals
//route delete /api/goals
//access Private

const deleteGoal = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()
    res.json({id:req.params.id})
})

module.exports= {
    getGoals,
    setGoal,
    upadateGoal,
    deleteGoal

}