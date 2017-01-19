var mongodb = require('mongodb');
var mongo_client = mongodb.MongoClient;

module.exports = {
  mongodb: mongodb,
  get_db: function(callback) {
    mongo_client.connect(process.env.node_env != 'production' ? 'mongodb://localhost:27017/mean_seed' : '', function(err, db) {
      callback(db);
    });
  }
}
