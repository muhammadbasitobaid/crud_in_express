module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4, // Or DataTypes.UUIDV1
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    hobby: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    }
  });

  return User;
};
