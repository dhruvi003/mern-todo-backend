const express = require('express');
const Task = require('../models/Task');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    priority: req.body.priority || 'medium',  
    dueDate: req.body.dueDate || null         
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.title = req.body.title || task.title; 
      task.isCompleted = req.body.isCompleted !== undefined ? req.body.isCompleted : task.isCompleted;
      task.priority = req.body.priority || task.priority; 
      task.dueDate = req.body.dueDate || task.dueDate; 
      const updatedTask = await task.save();
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (task) {
        await Task.deleteOne({ _id: req.params.id }); 
        res.json({ message: 'Task deleted' });
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (err) {
      console.error('Error deleting task:', err.message); 
      res.status(500).json({ message: err.message });
    }
  });
  

module.exports = router;
