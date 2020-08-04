const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Please enter your first name',
          },
        },
      },
      lastName: DataTypes.STRING,
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: 'Please enter a valid email address',
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Please enter your password',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
