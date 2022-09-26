const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,'Title is Required'],
        trim: true,
        maxlength: [30,'Title can not be longer than 30 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports =  mongoose.model('Task',TaskSchema);

