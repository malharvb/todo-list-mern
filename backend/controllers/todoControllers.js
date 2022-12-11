const Todo = require('../models/todoModel')

const mongoose = require('mongoose')

const getTodos = async (req,res) => {
    const todos = await Todo.find()

    if(!todos) {
        res.status(200).json({error: "No todos"})
    }

    res.status(200).json(todos)
}

const getTodo = async (req,res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such todo exists"})
        return
    }

    const todo = await Todo.find({_id: id})

    if(!todo) {
        res.status(404).json({error: "No such todo exists"})
        return
    }

    res.status(200).json(todo)
}

const createTodo = async (req,res) => {
    const {name, desc} = req.body

    try {
        const todo = await Todo.create({name, desc})
        res.status(200).json(todo)
    }
    catch(err) {
        res.status(400).json({error: err.message})
    }
    
}

const updateTodo = async (req,res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such todo exists"})
        return
    }

    const todo = await Todo.findOneAndUpdate({_id: id}, {...req.body})

    if(!todo) {
        res.status(404).json({error: "No such todo exists"})
        return
    }

    res.status(200).json(todo)
}

const deleteTodo = async (req,res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such todo exists"})
        return
    }

    const todo = await Todo.findOneAndDelete({_id: id})

    if(!todo) {
        res.status(404).json({error: "No such todo exists"})
        return
    }

    res.status(200).json(todo)
}

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}