module.exports = function checkAuth(escapeURLs) {
	return function (req, res, next) {
		for (var i=0; i<escapeURLs.length; i++) {
			if (req.originalUrl.match(escapeURLs[i])) 
				return next();
		}
			
		if (req.user) {
			return next();
		} else {
			res.redirect('/login');
		}
	}
};