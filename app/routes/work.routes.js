module.exports = app => {
  const controller = require("../controllers/work.controller.js");

  var router = require("express").Router();

  router.post("/create-project", controller.create);
}
