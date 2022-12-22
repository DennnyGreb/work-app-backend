const { sequelize } = require("../models");

exports.getUsers = async (req, res) => {
  const [users, metadata] = await sequelize.query("SELECT * FROM User;");
  res.json(users);
}

exports.getProjects = async (req, res) => {
  const IdUser = req.query.userId;
  const [projects] = await sequelize.query(`SELECT IdProject, Name, Description FROM Project WHERE IdProject IN (SELECT IdProject FROM UserProjectRole WHERE IdUser = '${IdUser}');`);
  // Left Join для колонок і тасок
  res.send({projects});
}

exports.getColumns = async (req, res) => {
  const IdProject = req.query.projectId;
  const search = req.query.search;
  const [columns] = await sequelize.query(`SELECT TaskState.IdTaskState, TaskState.Name AS TaskStateName, Task.Name AS TaskName, 
  Task.IdTask, Task.Description, Task.Work FROM TaskState LEFT JOIN Task ON TaskState.IdTaskState = Task.TaskStateId 
  WHERE ${search.length > 0 ? `TaskState.Name LIKE '%${search}%' AND` : ''} IdTaskState IN (SELECT IdTaskState FROM ProjectTaskState WHERE IdProject = '${IdProject}');`);
  res.send({columns});
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
      `INSERT INTO Project (IdClient, Name, Description, StartDate, EndDate, CreatedAt, UpdatedAt, Enabled) VALUES (0, '${name}', '${description}', NULL, NULL, now(), NULL, 1);`
    );
    const [userProjectRole] = await sequelize.query(
      `INSERT INTO UserProjectRole (IdRole, IdProject, IdUser) VALUES (1, '${project}', '${IdUser}');`
    );
    res.send({ status: 'Project created, UserProjectRole created'});
  } catch (err) {
    throw new Error(err);
  }
};

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
