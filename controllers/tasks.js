const Task = require('../models/tasks')

const getAllTasks = (req,res)=> {
    res.send("all itemsss")
}

const createTask = (req,res)=> {
    res.json(req.body)
}

const getTask = (req,res)=> {
    res.send("get single task")
}

const updateTask = (req,res)=> {
    res.send("update task")
}

const deleteTask = (req,res)=> {
    res.send("Destroy em all!!!")
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}