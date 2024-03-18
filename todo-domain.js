let todoList = [
    {title: "Buy Groceries", notes: "milk bread crackers", isComplete: false}, 
    {title: "Finish Exam", notes: "ace it", isComplete: true}
];
// Function to add a new task to the list
const addTask = (title, notes) => {
    const newTask = { title: title, notes: notes, isComplete: false };
    todoList.push(newTask);
    renderTodos(todoList); // Call renderTodos to update the DOM
};

// Function to mark a todo as complete
const markTodoAsComplete = (todo) => {
    todo.isComplete = true;
    renderTodos(todoList);
};