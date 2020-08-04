const bcrypt = require("bcrypt");

const { Controller } = require("../libraries");
const ServiceFactory = require("../services");

const config = require(`${__dirname}/../config`);

/**
 * User Controller Related Methods
 */
class UserController extends Controller {
	/**
     * Users listing page
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json} - all users
     * @example
     *      uc.list(req, res);
     */
	async list(req, res) {
		const obj = new ServiceFactory().create("UserListService");
		const userList = await obj.execute();

		return res.json(userList);
	}

	/**
     * View the user by id
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json} - the user details
     * @example
     *      uc.view(req, res);
     */
	async view(req, res) {
		const obj = new ServiceFactory().create("GetUserByIdService");
		const user = await obj.execute(req.params.id);

		if (user) {
			return res.json(user);
		}

		return res.status(404).json({ message: "User not found" });
	}

	/**
     * Create new user
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json} - newly created user
     * @example
     *      uc.create(req, res);
     */
	async create(req, res) {
		let obj = new ServiceFactory().create("GetUserByEmailService");
		const userFound = await obj.execute(req.body.email);

		if (userFound) {
			return res.status(409).json({ message: `User Already Exists: There is already a user with email ${userFound.email}` });
		}

		obj = new ServiceFactory().create("CreateUserService");
		req.body.password = (req.body.password !== undefined && req.body.password !== "") ? await bcrypt.hash(req.body.password, parseInt(config.SALT_ROUNDS)) : null;
		const user = await obj.execute(req.body);

		return res.status(201).json(user);
	}

	/**
     * Update user
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json} - updated user
     * @example
     *      uc.update(req, res);
     */
	async update(req, res) {
		let obj = new ServiceFactory().create("UpdateUserService");
		const updated = await obj.execute(req.params.id, req.body);
		if (updated) {
			obj = new ServiceFactory().create("GetUserByIdService");
			const user = await obj.execute(req.params.id);
			return res.json(user);
		}

		return res.status(404).json({ message: "User not found" });
	}

	/**
     * Delete user
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json}
     * @example
     *      uc.delete(req, res);
     */
	async delete(req, res) {
		const obj = new ServiceFactory().create("DeleteUserService");
		const deleted = await obj.execute(req.params.id);

		if (deleted) {
			return res.json({ message: "User deleted" });
		}

		return res.status(404).json({ message: "User not found" });
	}
}

module.exports = UserController;
