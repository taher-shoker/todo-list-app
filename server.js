var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var path = require('path')
var Users = require('./routes/Users')
var Tasks = require('./routes/Tasks')
const mongoose = require('mongoose')
var app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
/*
const mongoURI = 'mongodb://localhost:27017/TODO_List'

mongoose
  .connect(process.env.MONGODB_URI || mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
*/

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://cairokee:<taher@1993>@cluster0-oykp0.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
  app.use('/users', Users)
  app.use('/tasks', Tasks)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'));


  });
}



var port = process.env.PORT || 5000

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
