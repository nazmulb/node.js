const config = require(`${__dirname}/../config`);
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash(
      '123',
      parseInt(config.SALT_ROUNDS)
    );
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Nazmul',
          lastName: 'Basher',
          email: 'nazmul.basher@gmail.com',
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
