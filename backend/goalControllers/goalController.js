const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route GET /api.goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.json({message: "Get Goals4"})
})

// @desc Post Goals
// @route POST /api.goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
if(!req.body.text){
    res.status(400)
    throw new Error('please add a text field')
}

    res.json({message: "Set Goals"})
})

// @desc Update Goals
// @route PUT /api.goals/:id
// @access Private
const updateGoals =  asyncHandler(async (req, res) => {
    res.json({id : req.params.id})
})

// @desc Delete Goals
// @route DELETE /api.goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.json({message: "Delete Goals"})
})

module.exports = {getGoals, setGoals,updateGoals, deleteGoals}