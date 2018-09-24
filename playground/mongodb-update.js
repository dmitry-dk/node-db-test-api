const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  // db.collection('Users').findOneAndUpdate({name:'Leonard'}, { $set:{name:'Super mario'} }).then((res)=>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('5ba7b2673c1b8e0366116ec8')},
    {
      $set:{name:'Only SuperMan'},
      $inc:{age:2}
    },
    { returnOriginal:false }
    ).then((res)=>{
    console.log(res);
  });


//  client.close();
});
