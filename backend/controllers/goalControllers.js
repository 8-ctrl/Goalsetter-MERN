//desc@ Get goals
//route@ get /api/goals
//access@ Private

const getGoal = (req, res) =>{
    res.json({'message':'Get Goal'})
}

//desc Set goals
//route Post /api/goals
//access Private

const setGoal = (req, res) =>{
    res.json({'message':'Set Goal'})
}

//desc Get goals
//route get /api/goals
//access Private

const upadateGoal = (req, res) =>{
    res.json({'message':`update Goal ${req.params.id}`})
}

//desc Get goals
//route get /api/goals
//access Private

const deleteGoal = (req, res) =>{
    res.json({'message':`Delete Goal ${req.params.id}`})
}

module.exports= {
    getGoals,

}