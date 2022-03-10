const express = require('express')
const router = express.Router()
const { getGoals,setGoal,upadateGoal,deleteGoal } = require('../controllers/goalControllers')
const { protect } = require('../middleware/authMiddleware')

router.route("/").get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, upadateGoal).delete(protect, deleteGoal)


// this is replaced by the above code.
// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', upadateGoal)

// router.delete('/:id', deleteGoal)


module.exports = router