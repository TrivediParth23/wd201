// describe("First test suite", () => {
//     test("First case", () => {
//         expect(true).toBe(true);
//         // expect(false).toBe(true);
//         // expect(true).toBe(false);
//     });
// });

const todoList = require("../todo");

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  // let today = new Date().toLocaleDateString("en-CA");
  let today = new Date().toISOString().slice(0, 10);
  let yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .slice(0, 10);
  let tommorow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .slice(0, 10);

  beforeAll(() => {
    add({ title: "Submit assignment", dueDate: yesterday, completed: false });
    add({ title: "Pay rent", dueDate: today, completed: true });
    add({ title: "Service Vehicle", dueDate: today, completed: false });
    add({ title: "File taxes", dueDate: tommorow, completed: false });
    add({ title: "Pay electric bill", dueDate: tommorow, completed: false });
  });

  test("Should add new todo", () => {
    // expect(all.length).toBe(0);
    const todoItemsCount = all.length;
    add({ title: "Test todo", dueDate: tommorow, completed: false });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retriev a overdue items", () => {
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].title).toBe("Submit assignment");
    // expect(overdue().length > 0).toBe(true);
  });

  test("Should retriev a due today items", () => {
    const dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(2);
    expect(dueTodayItems[0].title).toBe("Pay rent");
    expect(dueTodayItems[1].title).toBe("Service Vehicle");
    // expect(dueToday().length > 0).toBe(true);
  });

  test("Should retriev a due later items", () => {
    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(3);
    expect(dueLaterItems[0].title).toBe("File taxes");
    expect(dueLaterItems[1].title).toBe("Pay electric bill");
    expect(dueLaterItems[2].title).toBe("Test todo");
    // expect(dueLater().length > 0).toBe(true);
  });
});
