const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const config = require(`${__dirname}/../config`);
const { UserService } = require("../services");

const auth = async (req, res, next) => {
	try {
		const service = new UserService();
		const user = await service.getUserByEmail(req.body.email);

		const isValid = bcrypt.compareSync(req.body.password, user.password);

		if (!isValid) {
			return res.status(401).json({ message: "Unauthorized: Invalid password." });
		}

		const newToken = jwt.sign({ email: user.email }, config.JWT_SECRET_KEY);
		return res.json(newToken);
	} catch (e) {
		return next(e.message);
	}
};

module.exports = auth;
