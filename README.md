# Tasks Tracker with Node.js + MySQL

The application has a list of tasks and users. Adding, deleting, editing, sorting is available by API. Response in JSON format. All data is stored in the MySQl database.


## Start App

For the application, you need to create a MySQL database and connect it by changing the settings in the file /config/db.config.js. <br />
Then to run the App you need to start the server. For example, by running the command - node server.js or npm start. <br />
By default, the server runs on port 3000. You can change this in the file server.js.


## Database

The MySQL database should contain two tables: "users" and "tasks".

### Users table
The Users table should contain the following columns :
- user_id (BIGINT 25);
- first_name (VARCHAR 255);
- last_name (VARCHAR 255);

### Tasks table
The Tasks table should contain the following columns :
- id (BIGINT 25);
- title (VARCHAR 255);
- description (VARCHAR 255);
- status (VARCHAR 255);
- user_id (BIGINT 25);


## API

### Users
- /api/users (GET) - returns a list of all users;
- /api/users (POST) - add new user. Required fields: "first_name", "last_name";
- /api/users/:user_id (PUT) - update user by id. Required fields: "first_name", "last_name";
- /api/users/:user_id (DELETE) - delete user by id.

### Tasks
- /api/tasks (GET) - returns a list of all tasks;
- /api/tasks/sort-by-id (GET) - returns a list of all tasks sorted by id;
- /api/tasks/sort-by-status (GET) - returns a list of all tasks sorted by status;
- /api/tasks (POST) - add new task. Required fields: "title", "description", "status", "user_id";
- /api/tasks/:id (PUT) - update task by id. Required fields: "title", "description";
- /api/tasks/update-status/:id (PUT) - update tasks status by id. Required field: "status";
- /api/tasks/update-userid/:id (PUT) - update tasks userid by id. Required field: "user_id";
- /api/tasks/:id (DELETE) - delete task by id.

