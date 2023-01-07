const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc Get Goals
// @route GET /api.goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.json(goals)

    //res.json({message: "Get Goals4"})
})

// @desc Post Goals
// @route POST /api.goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
if(!req.body.text){
    res.status(400)
    throw new Error('please add a text field')
}
const goal = await Goal.create({
    text: req.body.text
})
    res.json(goal)

    //res.json({message: "Set Goals"})
})

// @desc Update Goals
// @route PUT /api.goals/:id
// @access Private
const updateGoals =  asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json(updatedGoal)
    //res.json({id : req.params.id})
})

// @desc Delete Goals
// @route DELETE /api.goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.json({id:req.params.id})
    //res.json({message: "Delete Goals"})
})

module.exports = {getGoals, setGoals,updateGoals, deleteGoals}