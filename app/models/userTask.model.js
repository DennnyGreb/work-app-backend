module.exports = (sequelize, Sequelize) => {
  const UserTask = sequelize.define("userTask", {
    IdUserTask: {
      type: Sequelize.INT
    },
    IdUser: {
      type: Sequelize.INT
    },
    IdTask: {
      type: Sequelize.INT
    },
  });

  return UserTask;
};
