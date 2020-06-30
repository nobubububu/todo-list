$(() => {
  const todos = [];

  const todoInput = $("#todo-input");
  const todoContainer = $("#todo-container");
  const addButton = $("#add-button");

  addButton.click(() => {
    const todo = todoInput.val();
    if (todo) {
      todos.push(todo);
      todoInput.val("");
      showTodos();
    }
  });
  const showTodos = () => {
    todoContainer.empty();
    todos.forEach((todo, index) => {
      const item = $(`<li class="item">${todo}</li>`);
      const deleteButton = $(`<button class="item-button">削除</button>`);

      item.append(deleteButton);
      todoContainer.append(item);
      deleteButton.click(() => {
        deleteTodoByindex(index);
      });
    });
  };
  const deleteTodoByindex = (index) => {
    todos.splice(index, 1);
    showTodos();
  };
});
