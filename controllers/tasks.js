const { ObjectID } = require('bson');
const Task = require('../models/tasks');

const getTasks = async (req,res) => {
    try {
        const data =  await Task.find({});
        if(!data) {
            return res.status(404).json({
                        success: false,
                        error
                    })
        }
        return res.status(200).json({
                    success: true,
                    data,
                });
    } catch (error) {
        return res.status(400).json({
                    success: false,
                    error
                })
    }
}

const getTask = async (req,res) => {
    try {
        const data =  await Task.findOne({ _id : ObjectID(req.params.id)});
        return res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error
        })
    }
}

const addTask = async (req,res) => {
    try {
        const data = await Task.create(req.body);
        return res.status(200).json({
            success: true,
            message: 'Task created successfully',
            data
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error
        })
    }
}

const updateTask = async (req,res) => {
    try {
        const data = await Task.findOneAndUpdate({ _id : ObjectID(req.params.id)},req.body,{
            new: true,
            runValidators: true
        });
        if(!data) {
            return res.status(404).json({
                success: false,
                error
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error
        })
    }
}

const deleteTask = async (req,res) => {
    try {
        const task = await Task.findOneAndDelete({_id: ObjectID(req.params.id)});
        if(!task) {
            return res.status(404).json({
                success: false,
                error: 'Task Not Found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Task Deleted successfully',
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error
        })
    }
}

module.exports = {
    getTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}