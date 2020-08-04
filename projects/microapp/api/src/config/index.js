module.exports = {
	ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || 3000,
	JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'abc123',
	DB_CONFIG: require('./db.config'),
};
