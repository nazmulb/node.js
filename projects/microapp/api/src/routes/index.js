const express = require("express");

const router = express.Router();
const { IndexController } = require("../controllers");

const ic = new IndexController();

router.get("/", ic.index);
router.get("/healthz", ic.healthz);

module.exports = {
	indexRouter: router,
	usersRouter: require("./users"),
};
