const express = require('express')
const router = express.Router()
const { getGoals,setGoal,upadateGoal,deleteGoal } = require('../controllers/goalControllers')

router.route("/").get(getGoals).post(setGoal)
router.route('/:id').put(upadateGoal).delete(deleteGoal)


// this is replaced by the above code.
// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', upadateGoal)

// router.delete('/:id', deleteGoal)


module.exports = router