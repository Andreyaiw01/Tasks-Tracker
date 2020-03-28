const express = require("express");
router = express.Router();
const tasksController = require("../controllers/tasks.controller.js");

router.route('/')
.get(tasksController.findAll)
.post(tasksController.create)

router.route('/sort-by-id')
.get(tasksController.sortById)

router.route('/sort-by-status')
.get(tasksController.sortByStatus)

router.route('/:id')
.put(tasksController.update)
.delete(tasksController.delete)

router.route('/update-status/:id')
.put(tasksController.updateStatus)

router.route('/update-userid/:id')
.put(tasksController.updateUserId)

module.exports = router;