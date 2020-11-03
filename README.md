# React Client For Todo App

- The app communicates with a python flask api, that uses a sqlite database. You have the ability to create a todo, delete that todo and mark that todo complete.

### TODOS:

- create form for creating a todo
  - Take that data from the form and submit it to flask api
  - /api/create-todo
- Render all todos
  - Get all todos from flask api
  - /api/get-all-todos
- Mark todo complete
  - Talk to flask api and mark done as 'true' via 'id'
  - /api/edit-todo/id
- Delete todo
  - Talk to flask api and delete by 'id'
  - /api/delete-todo/id
