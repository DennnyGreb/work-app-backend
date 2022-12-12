module.exports = (sequelize, Sequelize) => {
  const UserProjectRole = sequelize.define("userProjectRole", {
    IdUserProjectRole: {
      type: Sequelize.INT
    },
    IdUser: {
      type: Sequelize.INT
    },
    IdProject: {
      type: Sequelize.INT
    },
    IdRole: {
      type: Sequelize.INT
    },
  });

  return UserProjectRole;
};
