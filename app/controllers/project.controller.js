const { sequelize } = require("../models");

exports.getProjects = async (req, res) => {
  const IdUser = req.query.userId;
  const [projects] = await sequelize.query(`SELECT IdProject, Name, Description FROM Project 
  WHERE IdProject IN (SELECT IdProject FROM UserProjectRole WHERE IdUser = '${IdUser}');`);
  // Left Join для колонок і тасок
  res.send({projects});
}

exports.createProject = async (req, res) => {
  // Validate request
  if (!req.body.data.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const name = req.body.data.name;
  const description = req.body.data.description;
  const IdUser = req.body.data.userId;

  try {
    const [project] = await sequelize.query(
      `INSERT INTO Project (IdClient, Name, Description, StartDate, EndDate, 
        CreatedAt, UpdatedAt, Enabled) VALUES (0, '${name}', '${description}', NULL, NULL, now(), NULL, 1);`
    );
    const [userProjectRole] = await sequelize.query(
      `INSERT INTO UserProjectRole (IdRole, IdProject, IdUser) 
      VALUES (1, '${project}', '${IdUser}');`
    );
    res.send({ status: 'Project created, UserProjectRole created'});
  } catch (err) {
    throw new Error(err);
  }
};