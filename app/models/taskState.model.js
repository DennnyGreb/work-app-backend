module.exports = (sequelize, Sequelize) => {
  const TaskState = sequelize.define("taskState", {
    IdTaskState: {
      type: Sequelize.INT
    },
    Name: {
      type: Sequelize.TEXT
    },
    Description: {
      type: Sequelize.TEXT
    },
  });

  return TaskState;
};
