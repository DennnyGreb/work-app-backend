module.exports = (sequelize, Sequelize) => {
  const TaskState = sequelize.define("taskState", {
    IdTaskState: {
      type: Sequelize.INTEGER,
    },
    Name: {
      type: Sequelize.TEXT
    },
    Description: {
      type: Sequelize.TEXT
    },
  }, { freezeTableName: true });

  return TaskState;
};
