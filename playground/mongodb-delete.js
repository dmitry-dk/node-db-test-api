const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  //delete many
  // db.collection('Todos').deleteMany({text: 'Try it'}).then((res) => {
  //   console.log(res);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Try it'}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Try it', completed: false}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5ba7adf63132af033f63a2e3')}).then((res) => {
    console.log(res);
  });

//  client.close();
});
