const { sequelize } = require("../models");

exports.createColumn = async (req, res) => {
  // Validate request
  if (!req.body.data.IdProject) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  try {
    const name = req.body.data.name;
    const description = req.body.data.description;
    const IdProject = req.body.data.IdProject;

    const [taskState] = await sequelize.query(
      `INSERT INTO TaskState (Name, Description) VALUES ('${name}', '${description}');`
    );
    const [userProjectRole] = await sequelize.query(
      `INSERT INTO ProjectTaskState (IdProject, IdTaskState) VALUES ('${IdProject}', '${taskState}');`
    );
    res.send({ status: 'Column created, ProjectTaskState created'});
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

exports.getColumns = async (req, res) => {
  const IdProject = req.query.projectId;
  const search = req.query.search;
  const [columns] = await sequelize.query(`SELECT TaskState.IdTaskState, 
  TaskState.Name AS TaskStateName, Task.Name AS TaskName, 
  Task.IdTask, Task.Description, Task.Work 
  FROM TaskState LEFT JOIN Task ON TaskState.IdTaskState = Task.TaskStateId 
  WHERE ${search.length > 0 ? `TaskState.Name LIKE '%${search}%' AND` : ''} IdTaskState 
  IN (SELECT IdTaskState FROM ProjectTaskState WHERE IdProject = '${IdProject}');`);
  res.send({columns});
}

exports.deleteColumn = async(req, res) => {
  console.log(`FIRE`);
  // Validate request
  if (!req.query.IdTaskState) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  try {
    const IdTaskState = req.query.IdTaskState;
    await sequelize.query(
      `DELETE FROM Task WHERE TaskStateId=${IdTaskState};`
    );
    await sequelize.query(
      `DELETE FROM ProjectTaskState WHERE IdTaskState=${IdTaskState};`
    );
    await sequelize.query(
      `DELETE FROM TaskState WHERE IdTaskState=${IdTaskState};`
    );
    res.send({ status: 'Column deleted, ProjectTaskState deleted'});
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};