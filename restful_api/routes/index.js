module.exports = function(app, fs, dirPath, dataFile) {
	app.get('/', function (req, res) {
		res.render('index', { title: 'FN - Home', sessuser: req.user });
	});
	
	app.get('/showAddForm', function (req, res) {
		res.sendFile( dirPath + "/views/add_form.html" );
	});

	app.get('/listUsers', function (req, res) {
	   fs.readFile( dataFile, 'utf8', function (err, data) {
		  console.log( data );
		  res.render('list', { title: 'FN - List Users', datas: JSON.parse( data )});
	   });
	});
	
	app.get('/view/:id', function (req, res) {
	   // First read existing users.
	   fs.readFile( dataFile, 'utf8', function (err, data) {
		  data = JSON.parse( data );
		  var user = data["user" + req.params.id] 
		  console.log( user );
		  res.render('view', { title: 'FN - View User', user: user });
	   });
	});
	
	app.post('/addUser', function (req, res) {
		// First read existing users.
		fs.readFile(dataFile, 'utf8', function (err, data) {
			data = JSON.parse( data );
			var lastId = Object.keys(data).length;
			var newId = ++lastId;
			var newKey = ("user"+newId).toString();
			
			var user =  JSON.parse(
						'{'+
						   '"'+newKey+'" : {'+
							  '"name" : "'+req.body.name+'",'+
							  '"password" : "'+req.body.password+'",'+
							  '"profession" : "'+req.body.profession+'",'+
							  '"id": '+lastId+
						   '}'+
						'}'
						);
			
			console.log( user );

			data[newKey] = user[newKey];
			
			data = JSON.stringify(data, null, 2);
			
			fs.writeFile(dataFile, data, function (err) {
				if( err ){
					console.log( err );
				}
				
				console.log( data );
				 
				setTimeout(function(){res.redirect('/listUsers')}, 1000);
			});
		});
	});
	
	app.delete('/:id', function (req, res) {
		// First read existing users.
		fs.readFile( dataFile, 'utf8', function (err, data) {
			data = JSON.parse( data );
			delete data["user" + req.params.id];

			data = JSON.stringify(data, null, 2);

			fs.writeFile(dataFile, data, function (err) {
				if( err ){
					console.log( err );
				}

				console.log( data );

				setTimeout(function(){res.redirect('/listUsers')}, 1000);
			});
	   });
	});
};