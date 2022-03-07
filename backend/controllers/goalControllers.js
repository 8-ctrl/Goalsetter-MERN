const asyncHandler = require('express-async-handler')

//desc@ Get goals
//route@ get /api/goals
//access@ Private

const getGoals = asyncHandler(async (req, res) =>{
res.json({'message':'Get Goal'})
})

//desc@ Set goals
//route@ Post /api/goals
//access@ Private

const setGoal = asyncHandler(async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text feild')
    }
    res.json({'message':'Set Goal'})
})

//desc@ Upadte goals
//route@ Put /api/goals
//access@ Private

const upadateGoal = asyncHandler(async (req, res) =>{
    res.json({'message':`update Goal ${req.params.id}`})
})

//desc Delete goals
//route delete /api/goals
//access Private

const deleteGoal = asyncHandler(async (req, res) =>{
    res.json({'message':`Delete Goal ${req.params.id}`})
})

module.exports= {
    getGoals,
    setGoal,
    upadateGoal,
    deleteGoal

}