module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("project", {
    IdProject: {
      type: Sequelize.INT
    },
    IdClient: {
      type: Sequelize.INT
    },
    Name: {
      type: Sequelize.STRING
    },
    Description: {
      type: Sequelize.STRING
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

  return Project;
};
