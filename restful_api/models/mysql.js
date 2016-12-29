var mysql = require('mysql');
var pool  = mysql.createPool('mysql://root:@localhost/myapp');

function addUser(){
	pool.getConnection(function(err, connection) {
		var user  = {'_id': 5, 'username': 'alamin', 'password': 565, 'profession': 'Engineer'};
		var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
			if (err) throw err;
			connection.release();
		});

		console.log(query.sql);
	});
}

function find(tableName){
	pool.getConnection(function(err, connection) {
		connection.query( 'SELECT * FROM ?? where ?? = ?', [tableName, '_id', 1], function(err, rows) {
			if (err) throw err;

			console.dir(rows);

			connection.release();
		});
	});
}

find('users');