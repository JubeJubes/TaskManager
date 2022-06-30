const Task = require('../models/Task')
const catchAsync = require('../middleware/catchAsync')
const customError = require('../customError/customError')


const getAllTasks = catchAsync( async (req,res,next)=> {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
        // json({status:'success',data:{tasks,nbHits:tasks.length}})
})

const createTask = catchAsync (async (req,res,next)=> {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTask = catchAsync(async (req,res,next)=> {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return next(new customError(404,`No Task with ${taskID}`))
            //return res.status(404).json({msg: `No Task with ${taskID}`})
        } 
        res.status(200).json({task})
})

const updateTask = catchAsync(async (req,res,next)=> {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate(taskID,{...req.body},{runValidators:true, new:true})
        res.status(200).json({id:taskID,data:req.body})
}) 

const deleteTask = catchAsync(async (req,res,next)=> {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndDelete(taskID)
        if(!task){
            return next(new customError(404,`No Task with ${taskID}`))
            //return res.status(404).json({msg: `No Task with ${taskID}`})
        } 
        res.status(200).json({task})
})

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}  