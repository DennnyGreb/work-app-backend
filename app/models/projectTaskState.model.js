module.exports = (sequelize, Sequelize) => {
  const ProjectTaskState = sequelize.define("projectTaskState", {
    IdProjectTaskState: {
      type: Sequelize.INTEGER,
    },
    IdProject: {
      type: Sequelize.INTEGER
    },
    IdTaskState: {
      type: Sequelize.INTEGER
    },
  }, { freezeTableName: true });

  return ProjectTaskState;
};
