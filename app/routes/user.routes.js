module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", users.createUser);

  // Retrieve all Tutorials
  router.get("/", users.findAllUsers);

  // Retrieve all published Tutorials
  // router.get("/published", users.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", users.findUser);

  // Update a Tutorial with id
  router.put("/:id", users.updateUser);

  // Delete a Tutorial with id
  router.delete("/:id", users.deleteUser);

  // Delete all Tutorials
  router.delete("/", users.deleteAllUsers);

  app.use("/users", router);
};
