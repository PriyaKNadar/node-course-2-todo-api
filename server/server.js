var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();


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

app.listen(3000, () => {
  console.log('Started at port 3000');
});


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
