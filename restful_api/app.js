var express = require('express'),
	app = express(),
	fs = require("fs"),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport'),
	localStrategy = require('passport-local').Strategy,
	flash = require('connect-flash'),
	checkAuth = require('./middlewares/check_auth'),
	//mysql = require('./models/mysql'),
	mongo = require('./models/mongo'),
	dirPath =  __dirname,
	dataFile =  __dirname + "/data/users.json";

app.disable('x-powered-by');

app.set('views', './views')
app.set('view engine', 'pug');

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(cookieParser());
app.use(session({
	secret: 'my secret string',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new localStrategy({
	passReqToCallback : true
  },
  function(req, username, password, done) {
	var userInfo = { username : 'nazmul', password : '123' };
	if (userInfo.username != username) {
        return done(null, false, req.flash('loginMessage', 'Incorrect username.'));
    }
	
	if (userInfo.password != password) {
        return done(null, false, req.flash('loginMessage', 'Incorrect password.'));
    }
	  
	return done(null, username);
  }
));

passport.serializeUser(function(username, done) {
	done(null, username);
});

passport.deserializeUser(function(username, done) {
    done(null, username);
});

// HTML should be prettified
app.locals.pretty = true;

app.use(checkAuth([
    "/login",
    "/process_login"
]));

require('./routes/index')(app, fs, dirPath, dataFile);
require('./routes/login')(app, fs, dirPath, dataFile, passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
		title: 'FN - Error',
        msg: err.message
    });
});

app.listen(8081);