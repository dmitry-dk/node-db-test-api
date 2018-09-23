const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  //db.collection('Todos').find()  //return cursor in Mongo DB documents
  // db.collection('Todos').find({
  //     _id: new ObjectID('5ba7b5745eca4bd74818bf76')
  //   }).toArray().then((docs) => {
  //   console.log('---- Todos ----');
  //   console.log(JSON.stringify(docs, undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos data', err);
  // });

  // db.collection('Users').find({
  //   name: 'Leonard'
  // }).count().then((count) => {
  //   console.log(`Users count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Users data', err);
  // });

  db.collection('Users').find({
    name: 'Leonard'
  }).toArray().then((result) => {
      console.log(JSON.stringify(result, undefined,2));
  }, (err) => {
    console.log('Unable to fetch Users data', err);
  });

//  client.close();
});
