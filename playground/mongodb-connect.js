// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//object destruction  ES6 standart
// var user = {name:'Dmytro', age:45};
// var {name} = user;
// console.log(name);

//create new _id
// var obj = new ObjectID();
// console.log(obj);  //--- generated new _id value


MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  // db.c ollection('Todos').insertOne({
  //   text:'Smth to do',
  //   completed:false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to inert Todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  // db.collection('Users').insertOne({
  //   name:'Leonard',
  //   age: 47,
  //   location:'Kiev'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to inert Users');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log('---------------------');
  //   console.log(result.ops[0]._id.getTimestamp());
  // });



  client.close();
});
