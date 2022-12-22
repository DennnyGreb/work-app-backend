module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    IdUser: {
      type: Sequelize.INTEGER,
    },
    IdCompany: {
      type: Sequelize.INTEGER
    },
    Name: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    UserName: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    },
    Email: {
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

  return User;
};
