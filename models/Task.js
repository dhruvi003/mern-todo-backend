const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' }, 
  dueDate: { type: Date }
 
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
