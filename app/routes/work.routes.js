module.exports = app => {
  const controller = require("../controllers/work.controller.js");

  app.get("/get-users", controller.getUsers);
  app.get("/get-projects", controller.getProjects);
  app.get("/get-columns", controller.getColumns);
  app.post("/create-user", controller.createUser);
  app.post("/create-project", controller.createProject);
  app.post("/create-column", controller.createColumn);
  app.post("/create-task", controller.createTask);
  app.delete("/delete-column", controller.deleteColumn);
  app.delete("/delete-task", controller.deleteTask);
  app.put("/update-task", controller.updateTask);
}
