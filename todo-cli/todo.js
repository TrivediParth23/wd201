const todoList = () => {
  let today = new Date().toISOString().split("T")[0];

  let all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.

    return all.filter((todoItem) => todoItem.dueDate < today);
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.

    return all.filter((todoItem) => todoItem.dueDate == today);
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.

    return all.filter((todoItem) => todoItem.dueDate > today);
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.

    let formatted = list
      .map((todoItem) => {
        if (todoItem.dueDate == today) {
          return "[" + (todoItem.completed ? "x" : " ") + "] " + todoItem.title;
        }

        return (
          "[" +
          (todoItem.completed ? "x" : " ") +
          "] " +
          todoItem.title +
          " " +
          todoItem.dueDate
        );
      })
      .join("\n");

    return formatted;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
