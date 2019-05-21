var express = require('express')
var router = express.Router()



var Task = require('../models/Tasks')

// Get All Tasks
 router.get('/alltasks',(req, res, next)=> {
  Task.find({}, { _id: 1, title: 1 }, function(err, tasks) {
    if (err) {
      res.send(err)
    }

    var data = []
    Object.keys(tasks).forEach(function(key) {
      var val = tasks[key]
      data.push([val.title, val._id])
    })
    //res.json(tasks);
    //res.send(tasks);
    res.send(data)
  })
})

// Get Single Task
/* router.get('/task/:id', function(req, res, next) {
  Task.findOne({ _id:ObjectId(req.params.id) }, function(
    err,
    task
  ) {
    if (err) {
      res.send(err)
    }
    res.json(task)
  })
}) 
 */
//create Task
router.post('/create', (req, res)=> {

  const TaskData = {
    title: req.body.title,
    

  }
  Task.findOne({
    title: req.body.title,
    
  }).then(task=>{
  
    if(!task){
      Task.create(TaskData).then(task=>{
        res.json({ status:'DATA Has Added !' })
      }).catch(err=>{
        res.send(err)
      })
    }else {
      res.json({ error: 'Task already exists' })
    }
  }).catch(err => {
    res.send('error: ' + err)
  })
   
}) 
// Delete Task
 router.delete('/delete/:id', function(req, res) {
  Task.deleteOne({ _id:req.params.id}, function(
    err,
    task
  ) {
    if (err) {
      res.send(err)
    }
    res.json(task)
  })
})



module.exports = router
