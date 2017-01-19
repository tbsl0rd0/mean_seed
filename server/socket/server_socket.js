var server_socket = require('socket.io')();
var socket_io_mongodb = require('socket.io-mongodb');

server_socket.adapter(socket_io_mongodb(process.env.node_env != 'production' ? 'mongodb://localhost:27017/mean_seed' : ''));

module.exports = server_socket;
