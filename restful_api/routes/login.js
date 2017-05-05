module.exports = function(app, fs, dirPath, dataFile, passport) {
	app.get('/login', function (req, res) {
		res.render('login', { title: 'FN - Login', messages: req.flash('loginMessage') });
	});
	
	app.post('/process_login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }), function(req, res) {
		// Do nothing
	});
	
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	
};