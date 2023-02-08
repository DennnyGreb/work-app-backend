module.exports = app => {
  const columnController = require("../controllers/column.controller.js");
  const userController = require("../controllers/user.controller.js");
  const projectController = require("../controllers/project.controller.js");
  const taskController = require("../controllers/task.controller.js");

  /* column */
  app.get("/get-columns", columnController.getColumns);
  app.post("/create-column", columnController.createColumn);
  app.delete("/delete-column", columnController.deleteColumn);

  /* user */
  app.get("/get-users", userController.getUsers);
  app.post("/create-user", userController.createUser);
  
  /* project */
  app.get("/get-projects", projectController.getProjects);
  app.post("/create-project", projectController.createProject);
  
  /* task */
  app.post("/create-task", taskController.createTask);
  app.delete("/delete-task", taskController.deleteTask); 
  app.put("/update-task", taskController.updateTask);
}
