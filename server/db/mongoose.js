var  mongoose = require('mongoose');

mongoose.Promise = global.Promise; //tell mongoose wich Promise lib to use, means default one
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true} );

module.exports = {mongoose};
