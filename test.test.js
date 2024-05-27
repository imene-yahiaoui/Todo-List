const createTaskElement = require("./script");

test("creates task element with given text", () => {
  const taskText = "Test Task";
  const taskElement = createTaskElement(taskText);

  expect(taskElement.tagName).toBe("LI");

  const checkbox = taskElement.querySelector('input[type="checkbox"]');
  expect(checkbox).not.toBeNull();

  const span = taskElement.querySelector("span");
  expect(span).not.toBeNull();
  expect(span.textContent).toBe(taskText);

  const deleteBtn = taskElement.querySelector("button");
  expect(deleteBtn).not.toBeNull();
  expect(deleteBtn.textContent).toBe("Delete");

  const editBtn = taskElement.querySelectorAll("button")[1];
  expect(editBtn).not.toBeNull();
  expect(editBtn.textContent).toBe("Edit");
});
