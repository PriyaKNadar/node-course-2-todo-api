var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

todo.save().then((doc) => {
  res.send(doc);
},(e) => {
  res.status(400).send(e);
});
});

app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id',(req, res) => {
  //res.send(req.params);
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
     res.status(404).send();
  }

  Todo.findById(id).then((todo) => {

    if (!todo) {
       res.status(404).send();
    }

    res.send({todo});

  }).catch((e) => {
    res.status(400).send();
  })
});

//post

// app.post('/users',(req, res) => {
//   var user = new User({
//     text: req.body.text;
//   });
// });


app.delete('/todos/:id',(req,res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }

    res.send({todo});

  }).catch((e) => {
    res.status(400).send();
  });

});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};

// var newTodo = new Todo({
//     text: 'Take Nishu for a walk',
//     completed: false,
//     completedAt: 1605
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved Todo ', doc);
// }, (e) => {
//   console.log('Unable to save Todo.');
// }
// );
//
// var otherTodo = new Todo({
//     text: 'Bath Nishu',
//     completed: true,
//     completedAt: 1230
// });

//
// var otherTodo = new Todo({
//     text: ' Give Nishika a massage '
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save Todo.');
// }
// );
//
//
//
// var newUser = new User({
//   email: 'priya@example.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save User.');
// }
// );
