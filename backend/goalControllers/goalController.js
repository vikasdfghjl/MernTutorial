// @desc Get Goals
// @route GET /api.goals
// @access Private
const getGoals = (req, res) => {
    res.json({message: "Get Goals4"})
}

// @desc Post Goals
// @route POST /api.goals
// @access Private
const setGoals = (req, res) => {
    res.json({message: "Set Goals"})
}

// @desc Update Goals
// @route PUT /api.goals/:id
// @access Private
const updateGoals = (req, res) => {
    res.json({id : req.params.id})
}

// @desc Delete Goals
// @route DELETE /api.goals/:id
// @access Private
const deleteGoals = (req, res) => {
    res.json({message: "Delete Goals"})
}

module.exports = {getGoals, setGoals,updateGoals, deleteGoals}