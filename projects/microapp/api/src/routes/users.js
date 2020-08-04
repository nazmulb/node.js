const express = require("express");

const router = new express.Router();
const { UserController } = require("../controllers");

const uc = new UserController();

router
	.route("/")
	.get(uc.list)
	.post(uc.create);

router
	.route("/:id")
	.get(uc.view)
	.put(uc.update)
	.delete(uc.delete);

module.exports = router;
