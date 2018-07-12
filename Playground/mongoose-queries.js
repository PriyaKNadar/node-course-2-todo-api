const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5b479b69201b292dc4fc0367';

var uid = '5b35715a9d309c321448a53f';

User.findById(uid).then((user) => {
  if(!user){
    return console.log('User not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e);
});

// if(!ObjectID.isValid(id)){
//   console.log('Id is not valid');
// };
//
// Todo.find({
//    _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//
//   console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));
