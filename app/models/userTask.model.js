module.exports = (sequelize, Sequelize) => {
  const UserTask = sequelize.define("userTask", {
    IdUserTask: {
      type: Sequelize.INTEGER
    },
    IdUser: {
      type: Sequelize.INTEGER
    },
    IdTask: {
      type: Sequelize.INTEGER
    },
  }, { freezeTableName: true });

  return UserTask;
};
