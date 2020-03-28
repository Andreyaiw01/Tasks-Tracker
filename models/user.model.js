const sql = require("./db.js");

// constructor
const User = function (user) {
  this.user_id = user.user_id;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { ...newUser });
    result(null, { ...newUser });
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET first_name = ?, last_name = ? WHERE user_id = ?",
    [user.first_name, user.last_name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { ...user });
      result(null, { ...user });
    }
  );
};

User.remove = (user_id, result) => {
  sql.query(`DELETE FROM users WHERE user_id = ${user_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found User with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", user_id);
    result(null, res);
  });
};

User.getAll = result => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

module.exports = User;