module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    IdRole: {
      type: Sequelize.INTEGER,
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
      type: Sequelize.BOOLEAN
    },
  }, { freezeTableName: true });

  return Role;
};
