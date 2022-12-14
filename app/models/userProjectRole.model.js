module.exports = (sequelize, Sequelize) => {
  const UserProjectRole = sequelize.define("userProjectRole", {
    IdUserProjectRole: {
      type: Sequelize.INTEGER,
    },
    IdUser: {
      type: Sequelize.INTEGER
    },
    IdProject: {
      type: Sequelize.INTEGER
    },
    IdRole: {
      type: Sequelize.INTEGER
    },
  }, { freezeTableName: true });

  return UserProjectRole;
};
