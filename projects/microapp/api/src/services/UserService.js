const models = require('../models');

/**
 * User Service Class
 */
class UserService {
    /**
     * Get all users
     */
	async getAllUsers() {
		try {
			const users = await models.User.findAll();
			return users;
		} catch (e) {
			return e.message;
		}
	}

    /**
     * Get user by id
     */
	async getUserById(id) {
		try {
			const user = await models.User.findOne({
				where: { id },
			});
			return user;
		} catch (e) {
			return e.message;
		}
	}

    /**
     * Get User By Email
     */
	async getUserByEmail(email) {
		try {
			const user = await models.User.findOne({
				where: { email },
			});
			return user;
		} catch (e) {
			return e.message;
		}
    }
    
    /**
     * Create user
     */
	async createUser(data) {
		try {
			const user = await models.User.create(data);
			return user;
		} catch (e) {
			return e.message;
		}
    }

    /**
     * Update user
     */
	async updateUser(id, data) {
		try {
			const [updated] = await models.User.update(data, {
				where: { id },
			});
			return updated;
		} catch (e) {
			return e.message;
		}
	}
    
    /**
     * Delete user
     */
	async deleteUser(id) {
		try {
			const deleted = await models.User.destroy({
				where: { id },
			});
			return deleted;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = UserService;
