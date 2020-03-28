const Task = require("../models/task.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Task
  const task = new Task({
      id: Date.now(),
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      user_id: req.body.user_id
  });

  // Save Task in the database
  Task.create(task, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Task.updateById(
    req.params.id,
    new Task(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Task with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Task with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};  

exports.updateStatus = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Task.updateStatusById(
    req.params.id,
    new Task(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Task with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Task with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
}; 

exports.delete = (req, res) => {
  Task.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Task with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Task with id " + req.params.id
        });
      }
    } else res.send({ message: `Task was deleted successfully!` });
  });
};

exports.findAll = (req, res) => {
    Task.getAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tasks."
        });
        else res.send(data);
    });
};

exports.sortById = (req, res) => {
  Task.sortById((err, data) => {
      if (err)
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving tasks."
      });
      else res.send(data);
  });
};

exports.sortByStatus = (req, res) => {
  Task.sortByStatus((err, data) => {
      if (err)
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving tasks."
      });
      else res.send(data);
  });
};

exports.updateUserId = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Task.updateUserIdById(
    req.params.id,
    new Task(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Task with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Task with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};




