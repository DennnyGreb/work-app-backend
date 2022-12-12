module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {

    IdTask: {
      type: Sequelize.DATE
    },
    Name: {
      type: Sequelize.STRING
    },
    Description: {
      type: Sequelize.STRING
    },
    Work: {
      type: Sequelize.STRING
    },
    IdProject: {
      type: Sequelize.INT
    },
    TaskStateId: {
      type: Sequelize.INT
    },
    StartDate: {
      type: Sequelize.DATE
    },
    EndDate: {
      type: Sequelize.DATE
    },
    CreatedAt: {
      type: Sequelize.DATE
    },
    UpdatedAt: {
      type: Sequelize.DATE
    },
    Enabled: {
      type: Sequelize.BOOL
    },
  });

  return Task;
};
