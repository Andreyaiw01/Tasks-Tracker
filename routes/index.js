const express = require("express");
router = express.Router();
usersRoutes = require("./users.routes");
tasksRoutes = require("./tasks.routes");

router.use('/users', usersRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;