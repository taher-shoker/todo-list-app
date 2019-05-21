const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({

 
    title :{
        type:String
    },
    date:{
        type: Date ,
        default: Date.now
    },
  
})

module.exports = Task = mongoose.model('tasks',TaskSchema)
