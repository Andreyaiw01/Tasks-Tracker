const express = require("express");
router = express.Router();
const usersController = require("../controllers/users.controller.js");

router.route('/')
.get(usersController.findAll)
.post(usersController.create)

router.route('/:user_id')
.put(usersController.update)
.delete(usersController.delete)

module.exports = router;