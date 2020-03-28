const sql = require("./db.js");

// constructor
const Task = function (task) {
  this.id = task.id;
  this.title = task.title;
  this.description = task.description;
  this.status = task.status;
  this.user_id = task.user_id;    
};

Task.create = (newTask, result) => {
  sql.query("INSERT INTO tasks SET ?", newTask, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created task: ", { ...newTask });
    result(null, { ...newTask });
  });
};

Task.updateById = (id, task, result) => {
  sql.query(
    "UPDATE tasks SET title = ?, description = ? WHERE id = ?",
    [task.title, task.description, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Task with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated task: ", { ...task });
      result(null, { ...task });
    }
  );
};

Task.updateStatusById = (id, task, result) => {
  sql.query(
    "UPDATE tasks SET status = ? WHERE id = ?",
    [task.status, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Task with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated task: ", { ...task });
      result(null, { ...task });
    }
  );
};

Task.remove = (id, result) => {
  sql.query(`DELETE FROM tasks WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Task with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted task with id: ", user_id);
    result(null, res);
  });
};

Task.getAll = result => {
  sql.query("SELECT * FROM tasks", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tasks: ", res);
    result(null, res);
  });
};

Task.sortById = result => {
  sql.query("SELECT * FROM tasks ORDER BY id DESC", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tasks: ", res);
    result(null, res);
  });  
}

Task.sortByStatus = result => {
  sql.query("SELECT * FROM tasks ORDER BY status ASC", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tasks: ", res);
    result(null, res);
  });  
}

Task.updateUserIdById = (id, task, result) => {
  sql.query(
    "UPDATE tasks SET user_id = ? WHERE id = ?",
    [task.user_id, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Task with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated task: ", { ...task });
      result(null, { ...task });
    }
  );
};

module.exports = Task;