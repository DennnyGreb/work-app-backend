module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    IdRole: {
      type: Sequelize.INT
    },	
    Name: {
      type: Sequelize.STRING
    },				
    Description: {
      type: Sequelize.STRING
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

  return Role;
};
