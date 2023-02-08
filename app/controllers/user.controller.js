const { sequelize } = require("../models");

exports.getUsers = async (req, res) => {
  const [users, metadata] = await sequelize.query("SELECT * FROM User;");
  res.json(users);
}

exports.createUser = async (req, res) => {
  // Validate request
  if (!req.body.data.userName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const userName = req.body.data.userName;
  const userLastName = req.body.data.userLastName;
  const userEmail = req.body.data.userEmail;
  const userNickname = req.body.data.userNickname;
  const password = req.body.data.password;

  try {
    const [project] = await sequelize.query(
      `INSERT INTO User (IdCompany, Name, LastName, Email, UserName, Password) VALUES (NULL, '${userName}', '${userLastName}', '${userEmail}', '${userNickname}', '${password}');`
    );

    res.send({ status: 'User created'});
  } catch (err) {
    throw new Error(err);
  }
};
