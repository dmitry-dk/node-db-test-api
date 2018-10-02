var express = require('express');
var bodyParser = require('body-parser');

var  {mongoose} = require('./db/mongoose');
//var  {Todo} = require('./models/todo');
var  {User} = require('./models/user');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
 // console.log(req.body);
    var todo = new Todo({
      text: req.body.text
    });

    todo.save( (err) => {
      if(err){
        res.status(400).send(eee);
      }
      else{
        res.send('ALL IS OK!!');
      }
    });

});


app.listen(3000, () => {
  console.log('Listen port 3000');
});
