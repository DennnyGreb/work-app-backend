const { sequelize } = require("../models");

exports.createTask = async (req, res) => {
  console.log(req.body);
  // Validate request
  if (!req.body.data.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  try {
    const name = req.body.data.name;
    const description = req.body.data.description;
    const work = req.body.data.work;
    const IdProject = req.body.data.IdProject;
    const IdTaskState = req.body.data.IdTaskState;
    await sequelize.query(
      `INSERT INTO Task (Name, Description, Work, IdProject, TaskStateId, StartDate, EndDate, CreatedAt, UpdatedAt, Enabled) 
      VALUES ('${name}', '${description}', '${work}', '${IdProject}', ${IdTaskState}, NULL, NULL, now(), NULL, 1);`
    );
    res.send({ status: 'Task created.'});
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

exports.updateTask = async (req, res) => {
  console.log(req.body);
  // Validate request
  if (!req.body.data.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  try {
    const name = req.body.data.name;
    const description = req.body.data.description;
    const work = req.body.data.work;
    const IdTask = req.body.data.IdTask;
    const TaskStateId = req.body.data.TaskStateId;

    await sequelize.query(
      `UPDATE Task SET Name = '${name}', Description = '${description}', Work = '${work}', TaskStateId = '${TaskStateId}', UpdatedAt = now() WHERE IdTask = '${IdTask}'`
    );
    res.send({ status: 'Task updated.'});
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

exports.deleteTask = async(req, res) => {
  console.log(`FIRE`);
  // Validate request
  if (!req.query.IdTask) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  try {
    const IdTask = req.query.IdTask;
    await sequelize.query(
      `DELETE FROM Task WHERE IdTask=${IdTask};`
    );
    res.send({ status: 'Task deleted'});
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};