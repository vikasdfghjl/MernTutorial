const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../goalControllers/goalController')

router.route('/').get(getGoals).post(setGoals)
// router.get('/', getGoals)
// router.post('/', postGoals)

router.put('/:id', updateGoals)

router.delete('/:id', deleteGoals)

module.exports = router;