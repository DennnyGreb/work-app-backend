module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("project", {
    IdProject: {
      type: Sequelize.INTEGER,
    },
    IdClient: {
      type: Sequelize.INTEGER
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
      type: Sequelize.BOOLEAN
    },
  }, { freezeTableName: true });

  return Project;
};
