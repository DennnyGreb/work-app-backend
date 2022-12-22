module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    IdTask: {
      type: Sequelize.INTEGER,
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
      type: Sequelize.INTEGER
    },
    TaskStateId: {
      type: Sequelize.INTEGER
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
      type: Sequelize.BOOLEAN
    },
  }, { freezeTableName: true });

  return Task;
};
